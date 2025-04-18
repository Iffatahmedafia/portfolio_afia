import React, { useRef, useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const scrollRef = useRef();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2); // default for mobile

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(3); // desktop
      } else if (window.innerWidth >= 640) {
        setCardsPerPage(3); // tablets
      } else {
        setCardsPerPage(1); // small mobile
      }
    };

    handleResize(); // call on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToPage = (page) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector('.project-card');
      const cardWidth = card?.offsetWidth ?? 300;
      container.scrollTo({
        left: page * cardWidth * cardsPerPage + page * 20, // account for gap
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const totalCards = container.querySelectorAll('.project-card').length;
      setPageCount(Math.ceil(totalCards / cardsPerPage));
    }
  }, [cardsPerPage]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector('.project-card');
      const cardWidth = card?.offsetWidth ?? 300;
      const page = Math.round(container.scrollLeft / (cardWidth * cardsPerPage));
      setCurrentPage(page);
    }
  };

  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
        Projects
      </h1>
      <Swiper
            spaceBetween={20}
            slidesPerView={2} // Show 2 slides on small screens
            breakpoints={{
              768: { slidesPerView: 3 }, // Show 4 slides on larger screens
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-16" // Space for dots
            >
          {[
            { title: "Shop Local", main: "React, Django, PostgreSQL", link: "https://github.com/Iffatahmedafia/ShopLocal.git" },
            { title: "Personal Task Manager", main: "React, Node.js, MongoDB", link: "https://github.com/Iffatahmedafia/PersonalTaskManager.git" },
            { title: "Hit Calculator Application", main: "Python, REST APIs, Airtable", link: "https://github.com/attiqRahman/Odds_api" },
            { title: "Mental Health Website", main: "Laravel, HTML5, CSS, Bootstrap, MySQL", link: "https://github.com/Iffatahmedafia/MentalHealthWebsite" },
            { title: "Journey Planner", main: "Python, Algorithm, gmplot", link: "https://github.com/Iffatahmedafia/JourneyPlanner" },
          ].map((proj, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard {...proj} />
            </SwiperSlide>  
          ))}
      </Swiper>
      {/* Swiper Pagination - Inline Style */}
      <style>
            {`
              .swiper-pagination {
                position: relative !important;
                margin-top: 15px;
              }

              .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                opacity: 0.5;
                transition: all 0.3s ease;
              }

              .swiper-pagination-bullet-active {
                opacity: 1;
              }
            `}
          </style> 
    </div>
  );
};

export default Projects;
