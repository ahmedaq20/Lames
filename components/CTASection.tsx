import Link from "next/link";

function CTASection() {
  return (
    <section className="w-full bg-slate-800 dark:bg-slate-900 py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Have a product or process that needs to work better?
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Bring us the idea, the bottleneck, or the disconnected workflow. We&apos;ll help you define a practical path from discovery to a secure, scalable system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact' className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
            Start a Conversation
          </Link>
          <Link href='/contact#contact-form' className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
            Request a Free Audit
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
