import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function Idea() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 pt-20 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Massive CTA */}
      <div className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-10 md:p-20 overflow-hidden text-center shadow-2xl shadow-primary-500/20">
          {/* Abstract circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Ready to build a system that works for you?
            </h2>
            <p className="text-white/80 text-xl">
              Tell us where your business is losing time. We&apos;ll help you turn the bottleneck into a secure, scalable solution.
            </p>
            <Link href='/contact' className="bg-white text-primary-600 hover:bg-slate-100 font-bold py-4 px-10 rounded-full text-lg transition-colors inline-flex items-center gap-2 shadow-lg">
              Book a discovery call <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Idea;
