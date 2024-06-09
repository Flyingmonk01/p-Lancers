import { HeroParallaxDemo } from "@/components/HeroParallax";
import { SparklesPreview } from "@/components/Sparkles";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";

export default function Home() {
    return (
        <>
            <main className="min-h-screen bg-black/[0.7] antialiased bg-grid-white/[0.02]">
                <div className="flex lg:flex-row flex-col justify-center items-center mt-20">
                    <HeroHighlightDemo />
                    <SparklesPreview />
                </div>
                <HeroParallaxDemo />
                <StickyScrollRevealDemo />
                
            </main>
        </>
    );
}
