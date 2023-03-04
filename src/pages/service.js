import { Fragment } from "react";
import ServiceFeature from "@/components/business/ServiceFeatures/ServiceFeature";
import TourInternational from "@/components/business/TourInternational/TourInternational";
import TourDomestic from "@/components/business/TourDomestic/TourDomestic";

export default function Service() {
  return (
    <Fragment>
      <main className="container pt-5">
        <ServiceFeature />
        <TourInternational />
        <TourDomestic />
      </main>
    </Fragment>
  );
}
