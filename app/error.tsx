'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white text-[#1F2937] flex items-center justify-center px-4">
      <section className="max-w-xl w-full rounded-[24px] border border-red-200 bg-red-50/70 p-8 sm:p-10 text-center shadow-[0_22px_44px_-34px_rgba(31,41,55,0.45)]">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1F2937] mb-3">Something Went Wrong</h1>
        <p className="font-inter text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          A temporary error occurred while loading this page. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#7A1730] hover:bg-[#5C1023] text-white font-poppins text-sm font-semibold border border-[#D4AF37]/35 shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1730]/35"
        >
          Retry
        </button>
      </section>
    </main>
  );
}
