import Link from "next/link";

function CTASection() {
  return (
    <section className="w-full bg-slate-800 dark:bg-slate-900 py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          do you have a project in mind?
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          This is a placeholder text used to describe the content in general without relying on real information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact' className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
            Contact us
          </Link>
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTASection;