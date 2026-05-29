export function PageLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white select-none">
      <div className="w-6 h-6 border-2 border-slate-300 border-t-transparent rounded-full animate-spin mb-2" />
      <p className="text-slate-400 text-xs font-semibold">載入中...</p>
    </div>
  );
}
