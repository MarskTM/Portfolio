'use client'

import Banner from "../components/banner/page";
import About from "../components/about/page";
import Experience from "../components/experience/page";
import Project from "../components/project/page";
import Blog from "../components/blog/page";
import Contact from "../components/contact/page";
import Subscribe from "../components/subscribe/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Experience />
      <Project />
      <Blog />
      <Contact />
      <Subscribe />
    </div>
  );
}
