import Image from "next/image";

const galleryImages = [
  { src: "/images/work1.jpg", title: "Shop Board Vinyl Cutting" },
  { src: "/images/work2.jpg", title: "Steel Letter Signage" },
  { src: "/images/work3.jpg", title: "Flex Backlit Printing" },
  { src: "/images/work4.jpg", title: "Eco Solvent Printing" },
  { src: "/images/work5.jpg", title: "Radium Work" },
  { src: "/images/work6.jpg", title: "Standy Display" },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Recent Printing & Signage Projects
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our completed vinyl cutting, steel letter, and eco solvent
            printing projects across Kolkata.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={item.src}
                alt={`${item.title} - Printing Services in Kolkata`}
                width={500}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-center px-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}