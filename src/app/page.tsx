import { SparklesPreview } from "@/components/Sparkles";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMoving";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { Technologies } from "@/components/Technologies";
import { GlobeDemo } from "@/components/Globe";
import ScrollToTop from "@/components/ScrollToTop";


export default function Home() {
    return (
        <>
           <ScrollToTop />
            <main className="min-h-screen w-[100vw] bg-black/[0.9] antialiased bg-grid-white/[0.02]">
                <div className="flex lg:flex-row flex-col justify-center items-center mt-20">
                    <HeroHighlightDemo />
                    <SparklesPreview />
                </div>
                <HeroScrollDemo />
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex-1">
                        <GlobeDemo />
                    </div>
                    <div className="flex-1">
                        <Technologies />
                    </div>
                </div>

                <StickyScrollRevealDemo />
                <InfiniteMovingCardsDemo />
            </main>
        </>
    );
}
