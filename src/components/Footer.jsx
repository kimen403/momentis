import React from "react";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-50 p-5 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">
              Eid Story 2025
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Buat ucapan Lebaran digital yang berkesan untuk keluarga dan teman
              Anda dengan template desain yang menarik dan mudah digunakan.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@lebaran2025.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <HiMail className="w-5 h-5" />
                kykuandco@gmail.com
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              ></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-primary"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="#catalog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Lebaran 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
