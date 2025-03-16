import React, { useEffect, useRef, useState } from "react";

export default function VideoModal({ isOpen, videoUrl, onClose }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [isOpen]);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartPos({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    const x = e.touches[0].clientX - startPos.x;
    const y = e.touches[0].clientY - startPos.y;

    // Limit panning within bounds
    const bounds = 100; // Maximum pan distance
    const limitedX = Math.max(Math.min(x, bounds), -bounds);
    const limitedY = Math.max(Math.min(y, bounds), -bounds);

    setPosition({ x: limitedX, y: limitedY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div className="relative w-full h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <video
            ref={videoRef}
            className={`w-full h-full transition-transform ${
              isMobile ? "scale-[2]" : ""
            }`}
            style={{
              transform: isMobile
                ? `translate(${position.x}px, ${position.y}px) scale(2)`
                : "none",
            }}
            controls
            autoPlay
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
