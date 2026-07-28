export default function Loading() {
  return (
    <main className="min-h-screen bg-white text-[#1F2937] px-4 sm:px-6 lg:px-8 py-24" aria-live="polite" aria-busy="true">
      <div className="max-w-7xl mx-auto">
        <div className="h-6 w-40 rounded bg-gray-200 animate-pulse mb-4" />
        <div className="h-12 w-3/4 rounded bg-gray-200 animate-pulse mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80 rounded-2xl bg-gray-200 animate-pulse" />
          <div className="space-y-4">
            <div className="h-12 rounded bg-gray-200 animate-pulse" />
            <div className="h-12 rounded bg-gray-200 animate-pulse" />
            <div className="h-24 rounded bg-gray-200 animate-pulse" />
            <div className="h-12 w-44 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
