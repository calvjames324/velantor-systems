export default function () {
  return (
    <div className="[font-synthesis:none] flex flex-col items-center gap-0 bg-[#071726] antialiased p-0">
      <div className="flex overflow-clip w-[1440px] h-[1024px] flex-col justify-center items-center gap-0 relative shrink-0 p-0">
        <img
          src="./assets/background.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[1024px] w-[1440px] max-w-none"
        />
        <div className="relative z-10 flex overflow-clip w-[1100px] h-[800px] items-center justify-between shrink-0">
          <div className="flex overflow-clip w-[650px] h-fit flex-col items-start shrink-0">
            <div className="text-[72px] leading-[88px] text-center text-white font-['Alegreya_SC',system-ui,sans-serif] font-bold shrink-0 size-fit">
              Velantor Systems
            </div>
            <div className="flex flex-col items-start gap-0 px-0 py-[60px] w-full h-fit shrink-0">
              <div className="text-[32px] leading-10 w-full h-fit [letter-spacing:0.05em] content-center text-white font-['Alegreya_Sans',system-ui,sans-serif] font-light whitespace-pre-wrap shrink-0">
                We’re an engineering team focused on machine learning and applied AI, with strong web development to deliver complete, usable products. We stay close to current AI research and turn modern ideas into practical systems, not just demos. <br /><br />Our edge is speed with rigour: we ship ML-driven POCs in about a week, ready for validation, investor demos, or real usage. From research-inspired prototypes to production-scale ML systems and full-stack applications, we build end to end.
              </div>
            </div>
            <div className="flex overflow-clip justify-center items-center gap-10 shrink-0 size-fit">
              <div className="text-[36px] leading-11 text-center text-white font-['Alegreya',system-ui,sans-serif] font-bold underline decoration-1 [text-underline-position:from-font] shrink-0 size-fit">
                about
              </div>
              <div className="text-[36px] leading-11 text-center text-white font-['Alegreya',system-ui,sans-serif] font-bold underline decoration-1 [text-underline-position:from-font] shrink-0 size-fit">
                work
              </div>
            </div>
          </div>
          <img
            src="./assets/illustration.svg"
            alt=""
            aria-hidden="true"
            className="h-[700px] w-[340px] shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
