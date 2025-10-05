export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 py-10 text-xs text-white/60 scroll-mt-20">
      <div className="border-t border-white/10 pt-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Muhammad Asad Raza. All Right Reserved.</p>
        <p>Built with Next.js • Tailwind • Framer Motion</p>
      </div>
    </footer>
  );
}
