"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CounterSection from "./components/CounterSection";
import TeamMemberCard from "./components/TeamMemberCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Storytelling from "./components/Storytelling";


const Home = () => {

  useEffect(() => {
    // Menu scroll handling
    const pageLinks = document.querySelectorAll(".ud-menu-scroll");
    
    const handleScroll = (e: Event, elem: Element) => {
      e.preventDefault();
      const href = elem.getAttribute("href");
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    };

    pageLinks.forEach((elem) => {
      elem.addEventListener("click", (e) => handleScroll(e, elem));
    });

    // Section menu active state
    const onScroll = () => {
      const scrollPos = window.scrollY;
      
      pageLinks.forEach((currLink) => {
        const val = currLink.getAttribute("href");
        if (!val) return;
        
        const refElement = document.querySelector(val);
        if (!refElement) return;
        
        const scrollTopMinus = scrollPos + 73;
        
        if (
          refElement.getBoundingClientRect().top <= scrollTopMinus &&
          refElement.getBoundingClientRect().bottom > scrollTopMinus
        ) {
          document.querySelector(".ud-menu-scroll")?.classList.remove("active");
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      pageLinks.forEach((elem) => {
        elem.removeEventListener("click", (e) => handleScroll(e, elem));
      });
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
    return (
      <>
        <Hero/>
        <About/>
        <Services/>
        <Teams/>
        <Storytelling/>
        <CTA/>
        <Contact/>

        {/* ====== Back To Top Start */}
        <a
          href="javascript:void(0)"
          className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
        >
          <span
            className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"
          ></span>
        </a>
        {/* ====== Back To Top End */}

      </>

    );
}

export default Home;