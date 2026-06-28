import Link from "next/link";
import {Home, AlertTriangle} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-slate-400 dark:text-slate-600" />
        </div>
        <h1 className="font-heading font-bold text-6xl text-slate-900 dark:text-white mb-2">
          404
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Halaman tidak ditemukan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-200"
        >
          <Home className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
