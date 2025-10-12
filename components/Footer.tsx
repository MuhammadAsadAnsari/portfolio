import { memo } from 'react';
import Link from 'next/link';
import Socials from './Socials';

function Footer() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
      {/* Social Media Icons */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="bg-transparent rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
          <h3 className="text-white font-semibold text-center mb-3 sm:mb-4 text-sm sm:text-base">Connect with me</h3>
          <Socials />
        </div>
      </div>
      
      <footer className="text-[10px] sm:text-xs text-white/60">
        <div className="border-t border-white/10 pt-4 sm:pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Muhammad Asad Raza. All Right Reserved.</p>
          <p className="text-center sm:text-right">Built with Next.js • Tailwind • Framer Motion</p>
        </div>
      </footer>
    </section>
  );
}

export default memo(Footer);
