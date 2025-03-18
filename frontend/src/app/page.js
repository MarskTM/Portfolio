'use client'

import Banner from "../components/banner/page";
import About from "../components/about/page";
import Experience from "../components/experience/page";
import Project from "../components/project/page";
import Blog from "../components/blog/page";
import Contact from "../components/contact/page";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      {/* <Experience /> */}
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}
