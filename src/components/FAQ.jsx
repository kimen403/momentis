import React from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Bagaimana cara membuat ucapan Lebaran?",
    answer:
      "Cukup pilih template yang Anda suka, kustomisasi teks dan desain sesuai keinginan, lalu bagikan ke keluarga dan teman Anda melalui berbagai platform sosial media.",
  },
  {
    question: "Apakah saya bisa menggunakan foto sendiri?",
    answer:
      "Ya, pada paket Premium dan Business, Anda dapat mengunggah dan menggunakan foto sendiri untuk membuat ucapan Lebaran yang lebih personal.",
  },
  {
    question: "Berapa lama ucapan Lebaran bisa diakses?",
    answer:
      "Durasi akses tergantung paket yang Anda pilih. Basic 24 jam, Premium 7 hari, dan Business 30 hari.",
  },
  {
    question: "Bagaimana cara membagikan ucapan Lebaran?",
    answer:
      "Setelah membuat ucapan, Anda akan mendapatkan link yang bisa dibagikan melalui WhatsApp, Facebook, Instagram, atau platform lainnya dengan mudah.",
  },
  {
    question: "Apakah bisa membuat ucapan untuk perusahaan?",
    answer:
      "Ya, paket Business kami dirancang khusus untuk kebutuhan perusahaan dengan fitur white label dan analytics untuk mengukur engagement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section id="faq" className="py-20 bg-accent/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Pertanyaan Umum</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang layanan
            ucapan Lebaran digital kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="w-full text-left bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <HiChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Masih punya pertanyaan?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Hubungi tim kami
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
