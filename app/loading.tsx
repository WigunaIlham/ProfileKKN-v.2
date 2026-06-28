export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-400 flex items-center justify-center animate-pulse">
          <span className="text-white font-heading font-bold">JL</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-400 animate-bounce"
              style={{animationDelay: `${i * 0.15}s`}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
