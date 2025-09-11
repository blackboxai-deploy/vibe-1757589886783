export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Musical Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From the cultural heart of Madhya Pradesh, Indori Singers has been preserving and celebrating 
            the rich musical traditions of India for over 15 years.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c0d3745b-01d6-4b17-8233-c47be228a49e.png"
              alt="Indori Singers group photo with traditional Indian instruments in cultural setting"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Preserving Tradition, Creating Memories
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in Indore, the cultural capital of Madhya Pradesh, our group began as a small ensemble 
              of passionate musicians dedicated to preserving and sharing the authentic sounds of Indian classical 
              and folk music. What started as a local initiative has now grown into a celebrated musical collective 
              that has performed across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our repertoire spans from timeless classical ragas to vibrant folk songs, from devotional bhajans 
              to contemporary fusion pieces. Each performance is crafted with deep respect for tradition while 
              embracing the joy and celebration that music brings to special occasions.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
            The Indori Singers Story
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Beginning</h3>
              <p className="text-gray-600 text-sm">
                Started in 2008 with a vision to bring authentic Indian music to celebrations 
                and preserve our cultural heritage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Growth</h3>
              <p className="text-gray-600 text-sm">
                Expanded our reach across central India, performing at over 500 events 
                and touching thousands of hearts with our music.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To make every celebration memorable through authentic music while training 
                the next generation in our rich musical traditions.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Artists */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Artists
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17c619d3-5e88-4f40-b809-83e55149f7c3.png"
                alt="Master musician portrait - traditional Indian classical artist and experienced performer"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Pandit Rajesh Sharma</h3>
              <p className="text-amber-600 font-medium mb-2">Lead Vocalist & Harmonium</p>
              <p className="text-gray-600 text-sm">
                Classical music maestro with 25+ years of experience in Indian classical and semi-classical music.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ecc102ee-8b88-4597-828f-cb0769b76fbf.png"
                alt="Female vocalist portrait - Indian classical singer in elegant traditional dress"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Smt. Priya Verma</h3>
              <p className="text-amber-600 font-medium mb-2">Classical Vocalist</p>
              <p className="text-gray-600 text-sm">
                Renowned for her soulful renditions of devotional music and folk songs from Madhya Pradesh.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b9ba1bf-3e07-47dc-9081-28fbaedbd0c4.png"
                alt="Tabla player portrait - percussion master and traditional Indian musician"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Ustad Arjun Patel</h3>
              <p className="text-amber-600 font-medium mb-2">Tabla & Percussion</p>
              <p className="text-gray-600 text-sm">
                Master percussionist specializing in classical tabla and folk rhythms, adding life to every performance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values & Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">🎨 Authenticity</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We stay true to the traditional roots of Indian music while adapting to contemporary celebration needs.
              </p>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-4">🤝 Professionalism</h3>
              <p className="text-gray-600 leading-relaxed">
                Every performance is delivered with punctuality, preparation, and the highest standards of musical excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">❤️ Cultural Heritage</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are dedicated to preserving and sharing the rich musical heritage of India for future generations.
              </p>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-4">✨ Creating Joy</h3>
              <p className="text-gray-600 leading-relaxed">
                Our ultimate goal is to create moments of joy, connection, and celebration through the power of music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}