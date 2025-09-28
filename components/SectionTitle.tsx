export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm tracking-widest uppercase text-white/60 mb-4">{children}</h2>
  );
}
