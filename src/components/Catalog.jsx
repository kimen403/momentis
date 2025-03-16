import React, { useRef } from "react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { FaWhatsapp } from "react-icons/fa";

const templates = [
  {
    id: 1,
    name: "Mosque 1",
    videoUrl: "/vidio/Mockup1.mp4",
    category: "Modern",
    isPopular: true,
  },
  {
    id: 2,
    name: "Traditional Ketupat",
    videoUrl: "/vidio/Mockup1.mp4",
    category: "Traditional",
    isNew: true,
  },
  {
    id: 3,
    name: "Minimalist Masjid",
    videoUrl: "/vidio/Mockup1.mp4",
    category: "Minimalist",
  },
  {
    id: 4,
    name: "Floral Islamic",
    videoUrl: "/vidio/Mockup1.mp4",
    category: "Modern",
  },
];

const categories = ["Semua", "Modern", "Traditional", "Minimalist"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = React.useState("Semua");
  const [videoModal, setVideoModal] = React.useState({
    isOpen: false,
    videoUrl: "",
  });

  const videoRefs = React.useRef({});

  const generateWhatsAppUrl = (templateName) => {
    const message = `Assalamualaikum, saya tertarik dengan template:

Nama Template: ${templateName}
Harga: Rp 49.000 (Promo)

Mohon informasi lebih lanjut.`;

    return `https://wa.me/6287814657055?text=${encodeURIComponent(message)}`;
  };

  const handleMouseEnter = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
  };

  const handleMouseLeave = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0;
    }
  };

  const filteredTemplates = templates.filter(
    (template) =>
      activeCategory === "Semua" || template.category === activeCategory
  );

  return (
    <section id="catalog" className="py-20 bg-pattern-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-arabic font-bold text-primary mb-4">
            Katalog Template
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih template yang sesuai dengan selera Anda dari koleksi desain
            eksklusif kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-emerald-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          layout
        >
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gold-100 group"
              onMouseEnter={() => handleMouseEnter(template.id)}
              onMouseLeave={() => handleMouseLeave(template.id)}
            >
              <div className="relative h-48">
                <video
                  ref={(el) => (videoRefs.current[template.id] = el)}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                >
                  <source src={template.videoUrl} type="video/mp4" />
                </video>
                <div
                  onClick={() =>
                    setVideoModal({ isOpen: true, videoUrl: template.videoUrl })
                  }
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {template.isPopular && (
                  <span className="absolute top-2 right-2 bg-gold-500 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </span>
                )}
                {template.isNew && (
                  <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {template.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {template.category}
                  </span>
                  <a
                    href={generateWhatsAppUrl(template.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-emerald-700 text-sm font-semibold flex items-center gap-1"
                  >
                    <FaWhatsapp className="text-lg" />
                    Beli
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        <VideoModal
          isOpen={videoModal.isOpen}
          videoUrl={videoModal.videoUrl}
          onClose={() => setVideoModal({ isOpen: false, videoUrl: "" })}
        />
      </div>
    </section>
  );
}
