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
    title: "Digital Care Portal",
    category: "Product Concept",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A concept for a clear, accessible digital service experience with structured content and secure user journeys."
  },
  {
    title: "Real-Time Finance Dashboard",
    category: "Dashboard Concept",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A data-rich interface concept for making complex financial activity easier to monitor and understand."
  },
  {
    title: "Investment Operations Hub",
    category: "Systems Concept",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A connected operations concept combining customer workflows, reporting, permissions, and service integrations."
  },
  {
    title: "Membership Experience",
    category: "Mobile Product Concept",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A responsive member journey concept designed to work consistently across web and mobile touchpoints."
  },
  {
    title: "Service Booking Platform",
    category: "Automation Concept",
    image: "https://images.unsplash.com/photo-1588776814546-1b4475432509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A service platform concept that connects scheduling, customer communication, and internal follow-up workflows."
  }
];

function PortfolioGrid() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-slate-900 dark:text-white font-semibold mb-2 text-lg">Selected Concepts</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">How We Think About Digital Systems</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Each concept explores how experience design, software engineering, automation, and reliable infrastructure can solve a real operational challenge.
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
                  Explore concept <ChevronLeft size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded transition-colors duration-300 shadow-lg shadow-primary-500/25">
            Discuss Your Use Case
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PortfolioGrid;
