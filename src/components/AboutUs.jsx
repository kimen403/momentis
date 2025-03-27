import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="pt-12 bg-opacity-5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-arabic font-bold text-primary mb-4">
              Tentang Eid Story
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Eid Story hadir untuk membantu Anda menciptakan momen Lebaran
                yang berkesan melalui ucapan digital yang indah dan bermakna.
              </p>
              <div className="bg-emerald-50 border-l-4 border-primary p-4 rounded">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Visi Kami
                </h3>
                <p className="text-gray-700">
                  Menjadi platform terdepan dalam menyediakan layanan ucapan
                  Lebaran digital yang menggabungkan nilai-nilai islami dengan
                  desain modern.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Icon"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
                <p className="text-gray-600 italic">
                  "Kami hadirkan sentuhan islami dalam setiap desain untuk
                  memperkuat makna Lebaran"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gold-200"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Keunggulan Kami
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Desain Eksklusif dengan Sentuhan Islami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Kustomisasi Sesuai Kebutuhan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Proses Cepat dan Mudah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Harga Terjangkau: 7€</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
