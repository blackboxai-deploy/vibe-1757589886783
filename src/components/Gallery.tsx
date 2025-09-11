"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events", count: 12 },
    { id: "weddings", name: "Weddings", count: 6 },
    { id: "cultural", name: "Cultural Events", count: 4 },
    { id: "corporate", name: "Corporate", count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "weddings",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d24a4fe-8ac0-4b71-b508-98200ba979f9.png",
      title: "Traditional Wedding Ceremony",
      description: "Sangeet ceremony performance with classical Indian music"
    },
    {
      id: 2,
      category: "cultural",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48de8cdc-bbbd-426e-91ef-23ce6dad4ff4.png",
      title: "Diwali Cultural Festival",
      description: "Folk music performance during community Diwali celebration"
    },
    {
      id: 3,
      category: "weddings",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1fb413a-cd19-4727-bb34-d1bcc7dddb14.png",
      title: "Wedding Reception Entertainment",
      description: "Live music entertainment at grand wedding reception"
    },
    {
      id: 4,
      category: "corporate",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0f0b6f3-6825-48f8-8d2f-b872fc500919.png",
      title: "Corporate Annual Function",
      description: "Cultural performance at company's annual celebration"
    },
    {
      id: 5,
      category: "cultural",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a205d75b-bcf1-4e22-bd97-c228a996931d.png",
      title: "Religious Ceremony",
      description: "Devotional music performance at temple festival"
    },
    {
      id: 6,
      category: "weddings",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c1873da8-ad84-4498-ba6a-7865a0a58b46.png",
      title: "Mehendi Ceremony",
      description: "Traditional songs during mehendi celebration"
    },
    {
      id: 7,
      category: "cultural",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9274535a-a11e-431a-97bf-7162a46a766c.png",
      title: "Garba Night Performance",
      description: "Live music for traditional Garba dance celebration"
    },
    {
      id: 8,
      category: "corporate",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/957d0dfd-f15d-4da3-81fd-71b49503609f.png",
      title: "Product Launch Event",
      description: "Musical entertainment at corporate product launch"
    },
    {
      id: 9,
      category: "weddings",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d7168f8-925f-48b4-b926-c3274d57cfe1.png",
      title: "Destination Wedding",
      description: "Outdoor performance at scenic destination wedding"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Performance Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Witness the magic of our performances through these memorable moments captured 
            during various celebrations and events across Indore and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                  : "border-amber-500 text-amber-600 hover:bg-amber-50"
              }`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-playfair text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Memorable Event?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted us to make their special occasions truly unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              Book Your Event Now
            </Button>
            <Button variant="outline" size="lg" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              View More Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;