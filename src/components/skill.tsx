import "../style/skill.css";
import React from "react";

const skills = [
  {
    title: "HTML",
    description:
      "HTML is the backbone of web page structure, providing semantic elements for layout, forms, and media. It ensures accessibility and SEO.",
  },
  {
    title: "CSS",
    description:
      "CSS enhances web design by adding styling, including animations, layouts, and responsive design. It ensures beautiful and consistent web pages.",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript enables interactivity on websites, allowing dynamic content, animations, and seamless user experiences.",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript enhances JavaScript by providing static typing, enabling better code maintenance and debugging.",
  },
];

const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-timeline">
        {skills.map((skill, index) => (
          <div key={index}  className="skills-card" >
            <div >
            <div className="skills-icon">{index + 1}</div>
              </div> 

            <div>
            <h2 className="skills-title">{skill.title}</h2>
            <p className="skills-description">{skill.description}</p>
            </div>
            
          </div>
          
        ))}
        <div className="skills-vertical-line"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
