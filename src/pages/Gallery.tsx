import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import hero6 from "@/assets/hero/hero-6.jpg";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";
import gallery15 from "@/assets/gallery/gallery-15.jpg";
import gallery16 from "@/assets/gallery/gallery-16.jpg";
import gallery17 from "@/assets/gallery/gallery-17.jpg";
import video1 from "@/assets/gallery/video-1.mp4";
import video2 from "@/assets/gallery/video-2.mp4";
import video3 from "@/assets/gallery/video-3.mp4";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  type: "image" | "video";
};

const galleryItems: GalleryItem[] = [
  { src: gallery1, alt: "Spa treatment", category: "Facial", type: "image" },
  { src: gallery2, alt: "Hair styling session", category: "Hair", type: "image" },
  { src: gallery3, alt: "Professional hair care", category: "Hair", type: "image" },
  { src: gallery4, alt: "Luxury pedicure treatment", category: "Pedicure", type: "image" },
  { src: gallery5, alt: "Relaxing spa experience", category: "Facial", type: "image" },
  { src: gallery6, alt: "Hair styling expertise", category: "Hair", type: "image" },
  { src: gallery7, alt: "Premium spa services", category: "Spa", type: "image" },
  { src: gallery8, alt: "Beauty treatment room", category: "Facial", type: "image" },
  { src: gallery9, alt: "Pedicure spa chairs", category: "Pedicure", type: "image" },
  { src: gallery10, alt: "Relaxation lounge", category: "Spa", type: "image" },
  { src: gallery11, alt: "Hair treatment session", category: "Hair", type: "image" },
  { src: gallery12, alt: "Ultrasonic facial treatment", category: "Facial", type: "image" },
  { src: gallery13, alt: "Ultrasonic facial procedure", category: "Facial", type: "image" },
  { src: gallery14, alt: "Busy salon floor", category: "Hair", type: "image" },
  { src: gallery15, alt: "Hair styling stations", category: "Hair", type: "image" },
  { src: gallery16, alt: "Elegant nail art", category: "Nails", type: "image" },
  { src: gallery17, alt: "Gold facial mask treatment", category: "Facial", type: "image" },
  { src: video1, alt: "Spa experience video", category: "Video", type: "video" },
  { src: video2, alt: "Beauty transformation", category: "Video", type: "video" },
  { src: video3, alt: "Salon showcase", category: "Video", type: "video" },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedItem(index);
  const closeLightbox = () => setSelectedItem(null);

  const goToPrevious = () => {
    if (selectedItem !== null) {
      setSelectedItem(selectedItem === 0 ? galleryItems.length - 1 : selectedItem - 1);
    }
  };

  const goToNext = () => {
    if (selectedItem !== null) {
      setSelectedItem(selectedItem === galleryItems.length - 1 ? 0 : selectedItem + 1);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        preTitle="Our Work"
        title="Our"
        highlightedWord="Gallery"
        subtitle="A glimpse into the La Belle experience — where luxury meets tranquility"
        backgroundImage={hero6}
      />

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            <span className="gold-text-gradient">Ready for Your Transformation?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the luxury and care that makes La Belle Lounge & Spa exceptional
          </p>
          <Button asChild size="lg" className="gold-gradient text-primary-foreground hover:opacity-90">
            <Link to="/booking">Book Your Experience</Link>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {galleryItems[selectedItem].type === "video" ? (
            <video
              src={galleryItems[selectedItem].src}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={galleryItems[selectedItem].src}
              alt={galleryItems[selectedItem].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next item"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 text-white/60 text-sm">
            {selectedItem + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
