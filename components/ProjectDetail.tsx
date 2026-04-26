import { Facebook, Twitter, Linkedin, ChevronRight, ArrowUpRight, ChevronLeft } from 'lucide-react';


const relatedProjects = [
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
  }
];

function ProjectDetail() {
  //   const { setCurrentView } = useNavigationStore();

  return (
    <div className="w-full bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Spacer for fixed navbar */}
      <div className="h-24"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column - Design Visual */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-white/5">
              {/* Visual Placeholder representing the long scroll "Cleaning Service" design from your image */}
              <div className="relative w-full bg-[#f4fbf7]">
                {/* Header part of mockup */}
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                    </div>
                    <div className="h-8 w-24 bg-emerald-600 rounded text-white text-xs flex items-center justify-center">Let&apos;s Talk</div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 space-y-4">
                      <h1 className="text-3xl font-bold text-slate-800">Best Cleaning Service<br />Your Home and Others</h1>
                      <p className="text-slate-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="h-10 w-32 bg-emerald-500 rounded mt-4"></div>
                    </div>
                    <div className="flex-1">
                      <img
                        src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Mockup Hero"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-16 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded shadow-sm h-32"></div>
                    <div className="p-4 bg-white rounded shadow-sm h-32"></div>
                  </div>
                </div>

                {/* Extended Mockup content to simulate long page */}
                <img
                  src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  className="w-full opacity-90"
                  alt="Details"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Project Info (Sticky) */}
          <div className="w-full lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Medical website
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                This is a placeholder text used as a placeholder, describing content or information in general without relying on real text.
              </p>

              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-100 dark:border-white/5 space-y-6 mb-12">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span className="text-slate-900 dark:text-white font-semibold">Category:</span>
                  <span className="text-slate-600 dark:text-slate-400">UI Design</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span className="text-slate-900 dark:text-white font-semibold">Tools:</span>
                  <span className="text-slate-600 dark:text-slate-400">Figma</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span className="text-slate-900 dark:text-white font-semibold">Project date:</span>
                  <span className="text-slate-600 dark:text-slate-400">January, 2020</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-slate-900 dark:text-white font-semibold">Share this:</span>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-[#1877F2] transition-colors"><Facebook size={20} fill="currentColor" className="bg-transparent" /></a>
                    <a href="#" className="text-slate-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={20} fill="currentColor" /></a>
                    <a href="#" className="text-slate-400 hover:text-[#0A66C2] transition-colors"><Linkedin size={20} fill="currentColor" /></a>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand hover:bg-primary-600 text-white font-bold py-4 px-10 rounded shadow-lg shadow-primary-500/20 transition-all duration-300">
                View Live Website
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* More Projects Section */}
      <section className="bg-white dark:bg-slate-950 py-24 px-6 md:px-12 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">More Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {relatedProjects.map((item, index) => (
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
                  <a
                    href="#"
                    className="inline-flex items-center text-slate-900 dark:text-white font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors border-b border-transparent hover:border-primary-600 dark:hover:border-primary-400 pb-0.5"
                  >
                    View More <ChevronLeft size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProjectDetail;