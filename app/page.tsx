import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-[900px]">
      <HeroSection />
      {/* <section className="px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1360px] gap-6 md:grid-cols-3">
          {[
            "Automate keyword research and content prioritization",
            "Turn technical SEO audits into an action queue",
            "Give teams one clear next step instead of another dashboard",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-black/8 bg-white/72 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              <p className="text-lg font-semibold tracking-[-0.03em] text-[#111111]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
