"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9b1836f-e0bb-4263-b7d3-aa1e71c143d5.png"
          alt="Indori Singers performing on stage with traditional Indian instruments in warm golden lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-300/30 mb-6">
              <span className="text-amber-200 font-medium">✨ Authentic Indian Musical Arts</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Experience the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                Soul of Indore
              </span>
              Through Music
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl">
              Professional musical artists bringing authentic Indian classical and folk music to your special occasions. 
              From weddings to cultural events, we create unforgettable musical experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
              >
                <Link href="/contact" className="flex items-center">
                  Book Your Event
                  <span className="ml-2">→</span>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
              >
                <Link href="/about">
                  Learn Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-300 font-playfair">500+</div>
                <div className="text-gray-300 font-medium">Events Performed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-300 font-playfair">15+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-300 font-playfair">50+</div>
                <div className="text-gray-300 font-medium">Traditional Songs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-300 font-playfair">100%</div>
                <div className="text-gray-300 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;