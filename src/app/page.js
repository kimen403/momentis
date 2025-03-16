"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaraPesan from "@/components/Features";
import Catalog from "@/components/Catalog";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  useEffect(() => {
    // Add Google Fonts (Amiri is a readable Islamic-style font)
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href =
      "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    document.head.appendChild(linkElement);

    // Apply font and background to the document
    document.documentElement.style.fontFamily = "'Amiri', serif";
    document.body.style.backgroundImage = "url('/images/bg-base.svg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Catalog />
        <CaraPesan />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
