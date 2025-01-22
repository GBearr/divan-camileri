import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>İletişim</h1>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border">
          <ContactItem
            icon={<FaEnvelope className="text-blue-500 w-6 h-6" />}
            label="Mail"
            value="gokcengokgoz@kastamonu.edu.tr"
            link="mailto:gokcengokgoz@kastamonu.edu.tr"
          />
          <ContactItem
            icon={<FaPhoneAlt className="text-green-500 w-6 h-6" />}
            label="Telefon"
            value="0 366 280 2962"
            link="tel:03662802962"
          />
          <ContactItem
            icon={<FaMapMarkerAlt className="text-red-500 w-6 h-6" />}
            label="Adres"
            value="Kuzeykent Mahallesi Orgeneral Atilla Ateş Paşa Caddesi Kastamonu Üniversitesi Mühendislik ve Mimarlık Fakültesi Kat:1 No:3088 Kastamonu/Merkez"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}

function ContactItem({ icon, label, value, link }: any) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {link ? (
          <a
            href={link}
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <span className="text-lg font-semibold text-gray-800">{value}</span>
        )}
      </div>
    </div>
  );
}
