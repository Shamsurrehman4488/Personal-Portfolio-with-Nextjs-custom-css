import "../style/projects.css";
import Image from "next/image";
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      image: "/images/project2.jpg",
      description: "I have developed an E-Commerce Website using Next.js And Tailwind css.Here is the Link of my Project.",
      link: "https://hekathone-2-e-commerce-website-by-shams.vercel.app/"
    },
    {
      id: 2,
      title: "Blog Website",
      image: "/images/project3.jpg",
      description: "I have developed a Blog Website using Next.js And Tailwind css.Here is the Link of my Project.",
      link: "https://milestone-3-blog-website-by-shams.vercel.app/"
    },
    {
      id: 3,
      title: "Resume Builder",
      image: "/images/project1.jpg",
      description: "I have developed a Resume Builder using Typescript And Node.js.Here is the Link of my Project.",
      link: "https://milestone-5-shareableresume-by-shams.vercel.app/"
    },
    {
      id: 4,
      title: "Solar System",
      image: "/images/project5.jpg",
      description: "I have developed a solar system project using HTML ans CSS.Here is the Link of my Project.",
      link: "https://github.com/Shamsurrehman4488/Solar-system-project"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority={project.id === 1}
                className="project-image"
              />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="click-button" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;