import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { aboutMockup } from "@/config/aboutConfig";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>Çalışma Ekibi</h1>
        <Card
          isFooterBlurred
          className="border-none w-full max-w-8xl flex flex-col"
          radius="lg"
        >
          {aboutMockup.persons.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between border-b border-gray-200 p-4 last:border-b-0 h-[100px]"
            >
              <span className="text-center font-semibold">{item.name}</span>
              {item.url && (
                <Button
                  className="font-semibold text-sm text-black bg-white border rounded-none"
                  color="default"
                  size="sm"
                  variant="flat"
                  radius="md"
                >
                  <Link href={item.url} passHref legacyBehavior>
                    <a
                      target="_blank"
                      href={item.url}
                      rel="noopener noreferrer"
                    >
                      Daha Fazla
                    </a>
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </Card>
      </section>
    </DefaultLayout>
  );
}
