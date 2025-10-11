export default function Footer() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20">
      
      <footer className="text-xs text-white/60">
        <div className="border-t border-white/10 pt-6 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Muhammad Asad Raza. All Right Reserved.</p>
          <p>Built with Next.js • Tailwind • Framer Motion</p>
        </div>
      </footer>
    </section>
  );
}
