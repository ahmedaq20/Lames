import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Medical website",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder text used as a placeholder, describing content or information in general without relying on real text."
  },
  {
    title: "Crypto website",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder text used as a placeholder, describing content or information in general without relying on real text."
  },
  {
    title: "Bitcoin investment website",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder text used as a placeholder, describing content or information in general without relying on real text."
  },
  {
    title: "Bodybuilding website",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder text used as a placeholder, describing content or information in general without relying on real text."
  },
  {
    title: "Dental website / Dental clinic",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1588776814546-1b4475432509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "This is a placeholder text used as a placeholder, describing content or information in general without relying on real text."
  }
];

function PortfolioGrid() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-lg">Portfolio</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our latest projects</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            This is a placeholder text used as a placeholder, describing content or information in general without relying on real text.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-white/5 group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                  {item.description}
                </p>
                <Link
                  href="/portfolio/projectdetail"
                  className="inline-flex items-center text-slate-900 dark:text-white font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors border-b border-transparent hover:border-primary-600 dark:hover:border-primary-400 pb-0.5"
                >
                  Read more <ChevronLeft size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded transition-colors duration-300 shadow-lg shadow-primary-500/25">
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
};
export default PortfolioGrid;