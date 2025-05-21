import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const sculptures = [
    {
      id: 1,
      title: "Ethereal Flow",
      material: "Bronze & Marble",
      year: "2023",
      featured: true,
    },
    {
      id: 2,
      title: "Temporal Shift",
      material: "Steel & Glass",
      year: "2022",
      featured: false,
    },
    {
      id: 3,
      title: "Harmonic Resonance",
      material: "Alabaster",
      year: "2023",
      featured: true,
    },
    {
      id: 4,
      title: "Celestial Form",
      material: "Bronze",
      year: "2021",
      featured: false,
    },
    {
      id: 5,
      title: "Whispered Silence",
      material: "Marble & Gold Leaf",
      year: "2023",
      featured: true,
    },
    {
      id: 6,
      title: "Fractured Reality",
      material: "Mixed Media",
      year: "2022",
      featured: false,
    },
  ];
const Stories = () => {
  return (
    <div> <section id="gallery" className="py-20 px-[5%] md:px-[10%] bg-white">
    <div className="container mx-auto px-4">
      <div data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center">
          Stories
        </h2>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sculptures.map((sculpture, index) => (
          <div
            key={sculpture.id}
            className="group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <Link href={`/storyteller/${sculpture.id}`}>
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={`/hero.jpg`}
                  alt={sculpture.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {sculpture.featured && (
                  <div className="absolute top-4 right-4 bg-green-800 text-white text-xs px-3 py-1">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white border border-white px-6 py-2 hover:bg-white/20 transition-colors duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2">
                {sculpture.title}
              </h3>
              <p className="text-gray-600">
                {sculpture.material}, {sculpture.year}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center" data-aos="fade-up">
        <Link
          href="/gallery"
          className="inline-block border-2 border-black text-black px-10 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300"
        >
          View All Works
        </Link>
      </div>
    </div>
  </section></div>
  )
}

export default Stories