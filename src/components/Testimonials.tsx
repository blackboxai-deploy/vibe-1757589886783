"use client";

import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rajesh Sharma",
      event: "Wedding Ceremony",
      location: "Indore",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e1d5ea2-5790-4455-bdd9-93f21eaa4bcc.png",
      testimonial: "Indori Singers made our wedding absolutely magical! Their performance during our sangeet ceremony was outstanding. The way they blended traditional and contemporary music was perfect. Our guests are still talking about it!"
    },
    {
      id: 2,
      name: "Dr. Amit Verma",
      event: "Cultural Festival",
      location: "Bhopal",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13d68000-a0e4-4632-933a-78639062e587.png",
      testimonial: "We hired Indori Singers for our annual cultural festival and they exceeded our expectations. Their knowledge of traditional folk songs and their ability to engage the audience was remarkable. Truly professional artists!"
    },
    {
      id: 3,
      name: "Sunita Agarwal",
      event: "Family Function",
      location: "Indore",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a80b531-dfe7-4c7c-9a9b-012321cc7890.png",
      testimonial: "What a wonderful experience! The team was so professional and their music touched everyone's hearts. They understood exactly what we wanted for our daughter's engagement and delivered perfectly."
    },
    {
      id: 4,
      name: "Rohit Industries Pvt. Ltd.",
      event: "Corporate Event",
      location: "Ujjain",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16e4d529-0cc7-4ee0-9f0b-973d92e1844a.png",
      testimonial: "Indori Singers brought a beautiful cultural touch to our corporate annual function. Their performance was the highlight of the evening. Professional, punctual, and absolutely talented!"
    },
    {
      id: 5,
      name: "Kavya & Arjun Patel",
      event: "Destination Wedding",
      location: "Goa",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7169dcc-4c54-4009-909c-9ba1555bf089.png",
      testimonial: "Even at our destination wedding in Goa, Indori Singers traveled and gave an amazing performance. They made our special day even more memorable with their soulful music and dedication."
    },
    {
      id: 6,
      name: "Madhavi Temple Trust",
      event: "Religious Ceremony",
      location: "Indore",
      rating: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/adce9f43-c6c6-4f35-9a93-eb19d9195cda.png",
      testimonial: "The devotional music performed by Indori Singers during our temple festival created such a spiritual atmosphere. Their understanding of religious music and traditions is exceptional."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience with Indori Singers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-amber-600 text-sm font-medium">{testimonial.event}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 font-playfair mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 font-playfair mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 font-playfair mb-2">100%</div>
              <div className="text-gray-600 font-medium">Repeat Bookings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 font-playfair mb-2">15+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;