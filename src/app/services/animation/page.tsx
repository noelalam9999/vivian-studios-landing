import React from "react";
import Hero from "../../components/Services/Hero";
import Mission from "../../components/Services/Mission";
import FeaturedProject from "../../components/Services/FeaturedProject";
import SubServices from "../../components/Services/SubServices";
import OtherProjects from "../../components/Services/OtherProjects";
import ContactUs from "@/app/components/Services/ContactUs";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <Hero></Hero>
      <Mission></Mission>
      <FeaturedProject></FeaturedProject>
      <SubServices></SubServices>
      <OtherProjects></OtherProjects>
      <ContactUs></ContactUs>
    </>
  );
};
export default page;
