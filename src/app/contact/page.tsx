import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-95">
            Ready to bring authentic Indian music to your special occasion? 
            Contact us to discuss your event and receive a personalized quote.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
              Let's Create Musical Magic Together
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you're planning a wedding, cultural event, corporate function, or private celebration, 
              we're here to make it unforgettable with our authentic musical performances.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    Based in Indore, Madhya Pradesh<br/>
                    Serving across Central India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Available 24/7 for bookings</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@indorisingers.com" className="hover:text-amber-600 transition-colors">
                      info@indorisingers.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">📷</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                  <p className="text-gray-600">
                    <a 
                      href="https://www.instagram.com/indori_singers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-amber-600 transition-colors"
                    >
                      @indori_singers
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Follow us for latest updates</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-amber-600 font-playfair">500+</div>
                  <div className="text-gray-600 text-sm">Events Performed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600 font-playfair">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600 font-playfair">4.9/5</div>
                  <div className="text-gray-600 text-sm">Client Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600 font-playfair">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600 text-sm">
                We recommend booking at least 2-3 months in advance for wedding season and 4-6 weeks 
                for other events to ensure availability.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Do you provide sound equipment?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we bring our own professional sound equipment suitable for your venue size. 
                Large venues may require additional arrangements.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Can you perform specific songs?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely! We specialize in customizing our repertoire based on your preferences 
                and can learn new songs for your special occasion.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">What is your performance duration?</h3>
              <p className="text-gray-600 text-sm">
                Performance duration is flexible based on your event needs, ranging from 1 hour 
                to full-day celebrations. We customize packages accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}