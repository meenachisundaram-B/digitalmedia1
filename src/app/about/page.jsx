// about.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-teal-600 text-gray-100 px-6 py-16 md:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Company Overview */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-stone-900">About Zha Digital Media</h2>
          <p className="text-xl max-w-4xl mx-auto text-gray-300">
            Zha Digital Media is a next-generation creative ecosystem that blends deep-rooted Tamil culture with cutting-edge technology.
            From storytelling and digital publishing to audio-visual production and learning platforms — we build experiences that move people.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-zinc-800">Our Vision</h3>
            <p className="text-md text-gray-300">
              To become the leading creative-tech company from South India, crafting digital futures rooted in cultural depth, artistic freedom, and human connection.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-zinc-800">Our Mission</h3>
            <p className="text-md text-gray-300">
              To empower creators, educators, publishers, and businesses with digital tools and storytelling platforms — unlocking their full potential while celebrating regional identity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-zinc-900">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="p-4 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-800 mb-1">Authenticity</h4>
              <p className="text-sm text-gray-300">We respect roots. We speak truth. We create from the soul.</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-800 mb-1">Innovation</h4>
              <p className="text-sm text-gray-300">We push boundaries with tech that feels human.</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-800 mb-1">Inclusion</h4>
              <p className="text-sm text-gray-300">We build for everyone. Every voice matters.</p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h4 className="font-semibold text-zinc-800 mb-1">Excellence</h4>
              <p className="text-sm text-gray-300">From design to delivery, we strive for brilliance.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-6 text-zinc-900 text-center">What We Do</h3>
          <ul className="grid md:grid-cols-2 gap-6 text-md text-gray-700 list-disc list-inside">
            <li><strong>Digital Publishing:</strong> Create, publish, and monetize eBooks, audiobooks, and TTS content.</li>
            <li><strong>Media Production:</strong> Films, documentaries, ad films, and cultural web series.</li>
            <li><strong>TTS + AI Tools:</strong> Develop tools for audio generation, localization, and digital narration.</li>
            <li><strong>Learning Platforms:</strong> Build knowledge spaces rooted in mother tongues and local wisdom.</li>
            <li><strong>Marketplace Solutions:</strong> Enable local creators and publishers to reach global audiences.</li>
          </ul>
        </div>

        {/* Why Zha? */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-zinc-900">Why “Zha”?</h3>
          <p className="text-md max-w-3xl mx-auto text-gray-300">
            "Zha" (ழ) is the pride of Tamil – a letter that's rich, deep, and uniquely ours. Just like the sound, we stand for things that can't be easily replicated: identity, strength, and soul. We are not just a company. We are a voice. We are Zha.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-10">
          <h4 className="text-xl font-semibold text-zinc-800 mb-4">Let’s build something meaningful together.</h4>
          <button className="px-6 py-3 bg-teal-900 text-white rounded-full shadow-md hover:bg-zinc-700 transition duration-200">
            Join the Zha Movement
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
