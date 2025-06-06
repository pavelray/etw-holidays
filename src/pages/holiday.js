import { Fragment } from "react";
import TourInternational from "@/components/business/TourInternational/TourInternational";
import TourDomestic from "@/components/business/TourDomestic/TourDomestic";

export default function Holiday() {
  return (
    <Fragment>
      <main className="container pt-5">
        <h3 className="mt-5 text-center">
          Experience the World - Choose from Our Wide Range of Destinations
        </h3>
        <TourInternational />
        {/* <TourDomestic /> */}
      </main>
    </Fragment>
  );
}
