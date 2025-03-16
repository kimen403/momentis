import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const calculateTimeToEid = () => {
  const eidDate = new Date("2025-04-01"); // Eid al-Fitr 2025
  const now = new Date();
  const difference = eidDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

export default function Hero() {
  const [timeToEid, setTimeToEid] = useState(calculateTimeToEid());
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToEid(calculateTimeToEid());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);
  return (
    <section
      id="home"
      className="flex flex-col justify-center min-h-screen rounded-2xl
      border-1 border-gold-200 backdrop-blur-lg shadow-lg pb-16 overflow-hidden relative"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Background Lebaran"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-emerald-800/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/bg-base.svg')",
            backgroundSize: "60px",
            backgroundRepeat: "repeat",
          }}
        />
      </motion.div>
      <div className="container relative p-10 z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white font-arabic leading-tight">
              Ucapan Lebaran
              <span className="block text-gold-400">Digital</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sampaikan kehangatan Idul Fitri melalui ucapan digital yang indah
              dan bermakna. Dengan desain islami yang elegan, buat momen Lebaran
              lebih berkesan.
            </p>

            {/* Countdown Timer */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-gray-900 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Mulai Sekarang
              </a>
              <a
                href="#catalog"
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full font-semibold hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Lihat Katalog
              </a>
            </div>
            <div className="mt-8 flex items-center gap-8 justify-center lg:justify-start text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Icon"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
                <span>Desain Islami</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Logo.svg"
                  alt="Quality Icon"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
                <span>Kualitas Premium</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[600px]">
              {/* Main Ketupat */}
              <div className="relative">
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Lebaran"
                  width={400}
                  height={400}
                  className="mx-auto transform hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/20" />
              </div>
              {/* Decorative Floating Elements */}
              <motion.div
                className="absolute -top-20 right-0"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Decoration"
                  width={80}
                  height={80}
                  className="opacity-60"
                />
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-10"
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Decoration"
                  width={60}
                  height={60}
                  className="opacity-40"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-20 right-20"
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Image
                  src="/images/ketupat.svg"
                  alt="Ketupat Decoration"
                  width={40}
                  height={40}
                  className="opacity-30"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
