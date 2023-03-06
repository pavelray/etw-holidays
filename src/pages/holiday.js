import { Fragment } from "react";
import TourInternational from "@/components/business/TourInternational/TourInternational";
import TourDomestic from "@/components/business/TourDomestic/TourDomestic";

export default function Holiday() {
  return (
    <Fragment>
      <main className="container pt-5">
        <TourInternational />
        <TourDomestic />
      </main>
    </Fragment>
  );
}
