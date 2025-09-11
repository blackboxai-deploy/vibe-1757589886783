import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Wedding Ceremonies",
      description: "Traditional and contemporary wedding songs to make your special day unforgettable with authentic Indian musical traditions.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3042dc7-c721-4a47-b2db-4764064671d6.png",
      features: ["Sangeet Ceremonies", "Wedding Processions", "Reception Entertainment", "Custom Song Selection"],
      price: "Starting from ₹25,000"
    },
    {
      title: "Cultural Events",
      description: "Celebrate festivals and cultural occasions with authentic folk music, classical performances, and regional specialties.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fdd69ae-2e91-4ad9-93d5-7ec1fc3b4cd3.png",
      features: ["Festival Celebrations", "Religious Ceremonies", "Community Events", "Cultural Programs"],
      price: "Starting from ₹15,000"
    },
    {
      title: "Corporate Events",
      description: "Professional entertainment for corporate functions, product launches, and business celebrations with cultural touch.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0658c263-c9a5-4dd3-8092-bdbd8eef1f7b.png",
      features: ["Product Launches", "Company Celebrations", "Award Ceremonies", "Team Building Events"],
      price: "Starting from ₹20,000"
    },
    {
      title: "Private Functions",
      description: "Intimate gatherings, birthday parties, and personal celebrations with customized musical performances.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/351800eb-5862-42b1-b003-87f537aff3d8.png",
      features: ["Birthday Celebrations", "Anniversary Parties", "Family Gatherings", "House Warmings"],
      price: "Starting from ₹10,000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Musical Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring the authentic sounds of Indore 
            to make your special occasions truly memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-playfair text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <span className="text-amber-600 font-semibold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  <Link href="/contact">
                    Get Quote for {service.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Custom Packages Available
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Every event is unique. Let us create a personalized musical experience tailored to your specific needs, 
            budget, and cultural preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              <Link href="/contact">
                Discuss Your Event
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              <Link href="/about">
                View Our Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;