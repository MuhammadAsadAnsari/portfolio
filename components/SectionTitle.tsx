import { Preahvihear } from "next/font/google";

const preahvihear = Preahvihear({ subsets: ["latin"], weight: "400" });

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={`${preahvihear.className} text-[28px] leading-none tracking-[0.02em] font-normal align-middle text-white mb-4`}
    >
      {children}
    </h2>
  );
}
