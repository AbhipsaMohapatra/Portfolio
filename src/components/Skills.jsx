import React from "react";
import Carousel from "react-multi-carousel";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Skill data to keep code clean
  const skillsData = [
    { title: "Web Development", percentage: 90 },
    { title: "DSA Problem Solver", percentage: 85 },
    { title: "MERN Stack", percentage: 95 },
   
    { title: "Java", percentage: 90},
  { title: "Python", percentage: 65},
  { title: "C Programming", percentage: 55},

  ];

  return (
    <section className="skill-section py-20 bg-[#0a0a0a] text-white" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-2">Technical proficiencies and tools</p>
        </div>

        <Carousel responsive={responsive} infinite={true} className="skill-slider p-10">
          {skillsData.map((skill, index) => (
            <div key={index} className="item flex flex-col items-center justify-center gap-6">
              {/* Circular Loader Area */}
              <div className="w-32 h-32 md:w-40 md:h-40">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: `#ff00ff`, // Your magical pink
                    textColor: '#fff',
                    trailColor: '#222',
                    backgroundColor: '#3e98c7',
                    strokeLinecap: "round",
                    pathTransitionDuration: 2, // Smooth load animation
                  })}
                />
              </div>
              <h4 className="text-xl font-semibold mt-4">{skill.title}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;