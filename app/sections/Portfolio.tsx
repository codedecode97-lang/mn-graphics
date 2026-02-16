import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    src: "/images/work1.jpg",
    title: "Shop Sign Board",
    category: "Vinyl Cutting & Flex Printing",
  },
  {
    src: "/images/work2.jpg",
    title: "Steel Letter Branding",
    category: "Premium Steel Letter",
  },
  {
    src: "/images/work3.jpg",
    title: "Backlit Flex Board",
    category: "Flex Backlit Printing",
  },
  {
    src: "/images/work4.jpg",
    title: "Eco Solvent Printing",
    category: "High Resolution Printing",
  },
  {
    src: "/images/work5.jpg",
    title: "Radium Work Signage",
    category: "Radium & Retro 3M",
  },
  {
    src: "/images/work6.jpg",
    title: "Standy Display",
    category: "Marketing Display Stand",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Section Tag */}
        <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
          Our Work
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent Printing & Signage Projects in Kolkata
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Explore some of our completed vinyl cutting, flex printing,
          steel letter, and signage projects delivered for businesses across Kolkata.
        </p>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
            >
              <Image
                src={project.src}
                alt={`${project.title} - Printing Services in Kolkata`}
                width={500}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}