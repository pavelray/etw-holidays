import { style } from "@/styles/Home.style";
import { ImageCarousel } from "@/components/ui/carousel/ImageCarousel";
import { BANNER_IMAGES } from "@/utils/constants";
import { Fragment } from "react";
import AboutUs from "@/components/business/AboutUs/AboutUs";
import MeetTheTeam from "@/components/business/MeetTeam/MeetTeam";

export default function Home() {
  return (
    <Fragment>
      <ImageCarousel carouselSlides={BANNER_IMAGES} />
      <main className="container">
        <AboutUs />
        <MeetTheTeam />
      </main>
      <style jsx>{style}</style>
    </Fragment>
  );
}
