import React from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Tentang Kami", href: "#about-us", emoji: "🕌" },
    { name: "Cara Pesan", href: "#cara-pesan", emoji: "📝" },
    { name: "Katalog", href: "#catalog", emoji: "✨" },
    { name: "Harga", href: "#pricing", emoji: "💎" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-emerald-900/90 border-b border-gold-200/20 backdrop-blur-xl shadow-lg"
    >
      <div className="w-full max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/Logo.svg"
              alt="Lebaran 2025"
              className="h-36 w-auto"
            />
            {/* <div className="pl-2 border-l-2 border-yellow-500/30">
              <span className="font-bold text-xl text-secondary">
                Lebaran 2025
              </span>
            </div> */}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group text-white hover:text-gold-200 transition"
              >
                <div className="flex items-center gap-2">
                  <span>{item.name}</span>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-yellow-500 transition-all" />
              </Link>
            ))}
            <Link
              href="#pricing"
              className="flex items-center gap-2 px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black rounded-full font-medium transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              <span>✉️</span>
              <span>Hubungi Kami</span>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-white hover:text-gold-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="h-7 w-7" />
            ) : (
              <HiMenuAlt3 className="h-7 w-7" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-emerald-900/95 backdrop-blur-lg rounded-b-2xl border-t border-gold-200/20"
            >
              <nav className="flex flex-col gap-4 p-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-lg text-white hover:text-gold-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gold-200/20">
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-black rounded-full font-medium transition hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>✉️</span>
                    <span>Hubungi Kami</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-500 via-gold-500 to-emerald-500 opacity-50" />
      </div>
    </motion.header>
  );
}
