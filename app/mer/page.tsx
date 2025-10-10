"use client";
// This page is a client component: renders an interactive MER collection grid
export default function MerPage() {
  const items = Array.from({ length: 9 }, (_, i) => `Track ${i + 1}`);
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold tracking-wide mb-2">MER</h1>
      <p className="text-white/70 mb-8">
        Fast-paced hip-hop reflecting Mercury’s speed
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((title) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/10 transition"
          >
            <div className="mb-3 flex items-center justify-center rounded-lg border border-white/10 bg-black/30 aspect-[3/4]">
              <span className="text-2xl text-white/60">???</span>
            </div>
            <div className="text-lg font-semibold">{title}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

