"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  category: "room" | "hall" | "food";
}

const images: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    caption: "프라이빗 가족룸 - 최대 12명 수용",
    category: "room",
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    caption: "메인홀 - 품격있는 인테리어",
    category: "hall",
  },
  {
    url: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
    caption: "셰프 특선 코스 - 북경오리구이",
    category: "food",
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    caption: "VIP룸 - 특별한 날을 위한 공간",
    category: "room",
  },
  {
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
    caption: "해물탕수육 - 시그니처 메뉴",
    category: "food",
  },
  {
    url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    caption: "랍스터 요리 - 프리미엄 식재료",
    category: "food",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">갤러리</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              우아한 공간과 정성스러운 요리를 미리 만나보세요
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${image.url}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">
                    {image.caption}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].caption}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {images[selectedIndex].caption}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white font-medium">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
