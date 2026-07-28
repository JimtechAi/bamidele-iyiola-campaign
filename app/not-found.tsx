import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937] flex items-center justify-center px-4">
      <section className="max-w-xl w-full rounded-[24px] border border-[#D4AF37]/30 bg-gradient-to-br from-[#7A1730]/[0.04] via-white to-[#0B6B3A]/[0.05] p-8 sm:p-10 text-center shadow-[0_24px_48px_-34px_rgba(31,41,55,0.65)]">
        <p className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1730] mb-2">404</p>
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1F2937] mb-3">Page Not Found</h1>
        <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
          The page you requested is unavailable. Return to the campaign homepage to continue browsing official updates and information.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins text-sm font-semibold border border-[#D4AF37]/35 shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/35"
        >
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}
