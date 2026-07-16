import React from "react";
import Hero from "@/components/Hero";
import Affiliation from "@/components/Affiliation";
import Activities from "@/components/Activities";
import Schedule from "@/components/Schedule";
import Plans from "@/components/Plans";
import Instructors from "@/components/Instructors";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Affiliation />
      <Activities />
      <Schedule />
      <Plans />
      <Instructors />
      <Location />
    </>
  );
}
