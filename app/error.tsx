"use client";

import {useEffect} from "react";
import {RefreshCw, AlertCircle} from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-rose-500" />
        </div>
        <h1 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
          Terjadi Kesalahan
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto text-sm">
          Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          <RefreshCw className="w-4 h-4" />
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
