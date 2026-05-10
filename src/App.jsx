export default function BestaTradersWebsite() {
  const products = [
    {
      title: 'Grains & Millets',
      image:
        '/grainsandmillets.png',
      desc: 'Premium grains, cereals, and nutritious millets processed directly from trusted Indian farms.s.'
    },
    {
      title: 'Pulses',
      image:
        '/pulses.png',
      desc: 'High-quality farm-grown pulses carefully selected for freshness, purity, and consistent supply.'
    },
    {
      title: 'Fresh Fruits',
      image:
        '/fruits.png',
      desc: 'Fresh mangoes, sweet lime and pomegranate produce sourced with quality assurance.'
    },
    {
      title: 'Vegetables',
      image:
        '/veggies.png',
      desc: 'Farm-fresh drumsticks, brinjals, chillies, lime, and cultivated vegetables supplied with consistency.'
    },
    {
      title: 'Chemicals',
      image:
        'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1400&auto=format&fit=crop',
      desc: 'Trusted supply of industrial chemical products with dependable sourcing and timely delivery.'
    }
  ];

  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#03140d]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
           <img
  src="/logo.png"
  alt="Besta Traders Logo"
  className="w-16 h-16 object-contain rounded-2xl"
/>

            <div>
              <h1 className="text-2xl font-black text-white tracking-wide">
                BESTA TRADERS
              </h1>
              <p className="text-green-400 text-sm tracking-[3px] uppercase">
                Quality You Can Trust
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-white font-medium">
            <a href="#home" className="hover:text-green-400 transition-all">Home</a>
            <a href="#about" className="hover:text-green-400 transition-all">About</a>
            <a href="#products" className="hover:text-green-400 transition-all">Products</a>
            <a href="#contact" className="hover:text-green-400 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <p className="uppercase tracking-[6px] text-green-400 mb-6 font-semibold">
              Agricultural & Chemical Supply
            </p>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8">
              BESTA TRADERS
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
              Supplying Quality. Delivering Trust.
            </h2>

            <p className="text-gray-200 text-xl leading-9 max-w-2xl mb-10">
              Your trusted partner for grains, millets, pulses, fruits, vegetables, and chemical products across the world.
            </p>

            <div className="flex gap-5 flex-wrap">
<a
  href="#products"
  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold"
>
  Our Products
</a>

<a
  href="#contact"
  className="border border-white text-white px-8 py-4 rounded-2xl font-bold"
>
  Contact Us
</a>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 text-white shadow-2xl">
            <div className="space-y-8 text-lg">
              <div>
                <h3 className="text-green-400 font-bold text-2xl mb-3">Address</h3>
                <p className="text-gray-300 leading-8">
                  Flat 5.508 Shriram Sameeksha, New Gangamma Gudi Police Station Rd, Naidu Layout, Kuvempunagar, Jalahalli East, Bengaluru, Karnataka 560013
                </p>
              </div>

              <div>
                <h3 className="text-green-400 font-bold text-2xl mb-3">Phone</h3>
                <p className="text-gray-300">+91 8143305055</p>
              </div>

              <div>
                <h3 className="text-green-400 font-bold text-2xl mb-3">Email</h3>
                <p className="text-gray-300">bestatraders.india@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
            alt="About"
            className="rounded-[40px] shadow-2xl h-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[5px] text-green-600 mb-5 font-bold">
              About Company
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Reliable partner for agricultural products and industrial chemicals trading.
            </h2>

            <p className="text-gray-700 text-lg leading-9 mb-6">
              Besta Traders is committed to supplying premium agricultural and chemical products with dependable sourcing, consistency, and professional customer service.
            </p>

            <p className="text-gray-700 text-lg leading-9 mb-10">
              We specialize in grains, millets, pulses, fruits, vegetables, and chemicals while maintaining strong quality standards across every order.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                <h3 className="text-4xl font-black text-green-600 mb-2">5+</h3>
                <p className="font-semibold">Product Categories</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100">
                <h3 className="text-4xl font-black text-yellow-600 mb-2">100%</h3>
                <p className="font-semibold">Quality Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-28 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-green-600 font-bold mb-5">
            Our Products
          </p>

          <h2 className="text-5xl font-black mb-16">
            Premium Quality Agricultural Products and Industrial Chemicals
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-left">
                  <h3 className="text-2xl font-black mb-4">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="text-gray-600 leading-7 mb-6">
                      {item.desc}
                    </p>
                  )}

                  <a
  href="https://wa.me/918143305055"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-2xl font-semibold transition-all"
>
  Send Inquiry
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 px-6 bg-[#03140d] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-green-400 mb-5 font-bold">
              Contact Us
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Let’s Build Business Together
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-10">
              Connect with Besta Traders for agricultural and chemical supply inquiries.
            </p>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                📞 +91 8143305055
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                ✉️ bestatraders.india@gmail.com
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl leading-8">
                📍 Flat 5.508 Shriram Sameeksha, New Gangamma Gudi Police Station Rd, Naidu Layout, Kuvempunagar, Jalahalli East, Bengaluru, Karnataka 560013
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[35px] p-10 text-black shadow-2xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 p-5 rounded-2xl border border-gray-200 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 p-5 rounded-2xl border border-gray-200 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full mb-5 p-5 rounded-2xl border border-gray-200 outline-none"
            ></textarea>
<a
  href="mailto:bestatraders.india@gmail.com?subject=Inquiry from Website"
  className="block text-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl transition-all"
>
  Send Inquiry
</a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 text-center py-8 border-t border-white/10">
        © 2026 Besta Traders. All Rights Reserved.
      </footer>
      <a
  href="https://wa.me/918143305055"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 flex items-center gap-3 transition-all"
>
  <span className="text-2xl">💬</span>
  <span className="font-bold">Chat on WhatsApp</span>
</a>
    </div>
  );
}
