import { Inter } from "@next/font/google";
import { style } from "@/styles/Home.style";
import { ImageCarousel } from "@/components/ui/carousel/ImageCarousel";
import { BANNER_IMAGES } from "@/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main">
        <ImageCarousel carouselSlides={BANNER_IMAGES}/>
      </main>
      <style jsx>{style}</style>
    </>
  );
}
