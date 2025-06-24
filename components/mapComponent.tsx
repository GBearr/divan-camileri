/* components/MapComponent.tsx */
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mosqueMockup } from "@/config/mosqueMockup";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export const MapComponent = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  /* haritadan seçim */
  useEffect(() => {
    const handler = (e: MessageEvent) =>
      e.data?.type === "mosqueSelect" && setSelectedId(e.data.id);
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mosqueMockup.mosque.filter(
      (m) =>
        m.name.toLowerCase().includes(q) || m.address.toLowerCase().includes(q)
    );
  }, [query]);

  const mosque = mosqueMockup.mosque.find((m) => m.id === selectedId);

  return (
    <div className="grid h-screen md:grid-cols-3 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800">
      {/* -------- PANEL -------- */}
      <motion.aside
        key="panel"
        className="relative md:col-span-1 flex flex-col backdrop-blur-xl/40 bg-white/60 dark:bg-neutral-900/60 shadow-xl"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -80, opacity: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        {/* ▸ seçim YOKSA: arama + kartlar */}
        <AnimatePresence mode="wait">
          {!mosque ? (
            <motion.div
              key="list"
              className="flex flex-col h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* arama */}
              <div className="p-4 border-b dark:border-neutral-700">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="İsim veya köy ara…"
                    className="pl-9 bg-white/60 dark:bg-neutral-800/60 backdrop-blur rounded-xl"
                  />
                </div>
              </div>

              {/* kart listesi */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 mt-2">
                  {results.slice(0, 6).map((m) => (
                    <Card
                      key={m.id}
                      onClick={() => setSelectedId(m.id)}
                      className="group cursor-pointer transition-all duration-200
                                  border border-transparent hover:border-primary-500/60
                                  bg-white/70 dark:bg-neutral-800/70 backdrop-blur
                                  shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm">{m.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {m.address}
                        </p>
                      </CardContent>
                    </Card>
                  ))}

                  {results.length === 0 && (
                    <p className="text-center text-sm text-muted-foreground">
                      Sonuç bulunamadı
                    </p>
                  )}
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            /* ▸ seçim VARSA: detay */
            <motion.div
              key="detail"
              className="flex flex-col h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:underline text-primary-600"
              >
                <ArrowLeft className="h-4 w-4" /> Listeye dön
              </button>

              <ScrollArea className="flex-1 px-6 pb-6">
                <h2 className="text-xl font-bold mb-3">{mosque.name}</h2>
                <p className="text-sm text-justify leading-relaxed mb-4 whitespace-pre-wrap">
                  {mosque.description}
                </p>
                {mosque.imagePath && (
                  <img
                    src={mosque.imagePath}
                    alt={mosque.name}
                    className="w-full rounded-xl shadow-md"
                  />
                )}
                <div className="mt-5 flex justify-end">
                  <Link
                    href={`/detail/${mosque.id}`}
                    className="mt-5 inline-flex items-center justify-center
              rounded-md bg-primary-600 px-5 py-2.5 text-sm
              font-medium text-white shadow hover:bg-primary-700
              transition-colors"
                  >
                    Daha fazla
                  </Link>
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>

        {/* dekoratif çizgi */}
        <span className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent dark:via-neutral-700" />
      </motion.aside>

      {/* -------- HARİTA -------- */}
      <div className="md:col-span-2 h-72 md:h-full">
        <iframe
          src="/map/kirsal_cami_harita_guncel.html"
          title="Kırsal Cami Haritası"
          loading="lazy"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};
