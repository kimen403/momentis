import React from "react";
import { motion } from "framer-motion";
import {
  HiTemplate,
  HiCreditCard,
  HiCollection,
  HiDownload,
} from "react-icons/hi";

const steps = [
  {
    icon: <HiTemplate className="h-8 w-8" />,
    title: "1. Pilih Template",
    description:
      "Pilih desain ucapan Lebaran yang sesuai dengan selera Anda dari katalog kami",
  },
  {
    icon: <HiCollection className="h-8 w-8" />,
    title: "2. Personalisasi",
    description: "Kirimkan teks dan foto sesuai keinginan Anda",
  },
  {
    icon: <HiCreditCard className="h-8 w-8" />,
    title: "3. Pembayaran",
    description:
      "Lakukan pembayaran sebesar Rp 49.000 melalui transfer bank atau e-wallet",
  },
  {
    icon: <HiDownload className="h-8 w-8" />,
    title: "4. Terima File",
    description:
      "Dapatkan file ucapan Lebaran Anda dalam format yang diinginkan",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CaraPesan() {
  return (
    <section id="cara-pesan" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-arabic font-bold text-primary mb-4">
            Cara Pesan
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan ucapan Lebaran digital Anda dengan 4 langkah mudah
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-gold-100"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#catalog"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Lihat Katalog Template
          </a>
        </div>
      </div>
    </section>
  );
}
