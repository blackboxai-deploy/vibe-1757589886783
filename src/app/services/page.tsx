import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Musical Services
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-95">
            Professional musical entertainment tailored for every occasion. From intimate gatherings 
            to grand celebrations, we bring authentic Indian music to make your events unforgettable.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-12">
            Specialized Offerings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎤</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Live Recording</h3>
                <p className="text-gray-600">
                  Professional live recording of your special moments to preserve memories forever.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Music Workshops</h3>
                <p className="text-gray-600">
                  Educational workshops and training sessions in Indian classical and folk music.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✈️</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Destination Events</h3>
                <p className="text-gray-600">
                  We travel across India and internationally to perform at your destination events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-12">
            How to Book Our Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Reach out via phone, email, or our booking form with your event details.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  We discuss your requirements, preferences, and provide a customized quote.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  Book your date with a small advance payment and receive confirmation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-600 font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600 text-sm">
                  We arrive on time and deliver an unforgettable musical experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
            Ready to Make Your Event Memorable?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring authentic Indian music to your special celebration. 
            Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              <Link href="/contact">
                Get Your Quote Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              <Link href="tel:+919876543210">
                Call: +91 98765 43210
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}