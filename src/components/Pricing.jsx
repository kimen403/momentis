import React from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const features = [
  "Template Premium Eksklusif",
  "Format Video atau Gambar",
  "Kustomisasi Teks dan Foto",
  "Tanpa Watermark",
  "Revisi Minor",
  "Pengiriman Instan 1x24 Jam",
];

export default function Pricing() {
  const generateWhatsAppUrl = () => {
    const message = `Assalamualaikum, saya tertarik dengan Paket Lebaran Digital.

Template: Paket Lebaran Digital
Harga: 7€ (Promo)

Mohon informasi lebih lanjut.`;

    return `https://wa.me/6287814657055?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-pattern-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-arabic font-bold text-primary mb-4">
            Harga Spesial
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan ucapan Lebaran digital berkualitas dengan harga terjangkau
          </p>
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gold-200 overflow-hidden">
            <div className="bg-emerald-50 p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Paket Lebaran Digital
              </h3>
              <div className="bg-red-100 text-red-600 font-semibold py-1 px-3 rounded-full inline-block mb-2">
                HEMAT 60%
              </div>
              <div className="mb-1">
                <span className="text-gray-400 text-2xl line-through">12€</span>
              </div>
              <div className="text-5xl font-bold text-primary mb-2">7€</div>
              <p className="text-gray-600">Harga spesial untuk 1 desain</p>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheck className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
