import React from 'react';
import './about.scss';

const experiences = [
  {
    title: 'FullStack Developer',
    company: 'Skillop',
    tenure: 'Feb 2024-Present',
    description: 'Developed and maintained scalable backend services using Node.js and Express, ensuring robust server-side functionality. Implemented and optimized MongoDB database solutions and collaborated closely with the frontend team.',
  },
  {
    title: 'Co-Head',
    company: 'Skillop',
    tenure: 'April 2024-Present',
    description: 'Lead the web development team, organizing tech events and skill workshops to enhance technical skills. Provide mentorship and training, fostering a collaborative environment for members to grow.',
  },
  {
    title: 'Co-Founder & Backend Developer',
    company: 'Moofli',
    tenure: 'April 2024-Present',
    description: 'Co-conceptualized and developed the MOOFLI platform. Built and managed a talented team, ensuring high-quality product delivery.',
  },
  {
    title: 'FullStack Developer Intern',
    company: 'Delhi Police',
    tenure: 'March 2024-Present',
    description: 'Developed the backend of the COP App, incorporating role-based access control to modernize police operations and improve coordination.',
  },
  {
    title: 'Frontend Developer',
    company: 'Resumify',
    tenure: 'Dec 2023-Present',
    description: 'Crafted intuitive and visually appealing user interfaces to enhance user experience, ensured the platform is fully responsive, providing a seamless experience across all devices.',
  },
];

const achievements = [
  {
    title: 'Hackathon Participant | HackAI IIT Bombay',
    date: 'Dec 2023',
    description: 'Represented Skillop society (Formerly StartupX) at Techfest, IIT Bombay, securing 7th place in hackathon.Developed AIagent (resume segragator)for hiring processes in companies, overcoming challenges with guidance from Prof. Ranganath M. Singari.',
  },
  {
    title: 'Hackathon Participant | VIHAAN Hive 2024',
    date: 'Apr 2023',
    description: 'Developed YOLO, an AI-driven healthcare platform that connects patients with doctors, utilizes blockchain for data security, and leverages Flask and MySQL for a secure and accessible healthcare solution in Viksit Bharat.',
  },
  {
    title:"Hackathon Participant | IEEE YESIST'12 2024",
    date: 'Mar 2023',
    description: "Pitched Skillop, an experience-sharing platform that connects students with detailed insights into users' journeys, offers mentorship, and partners with Resumify to provide career-enhancing tools and features.",
  },
 
];

// Function to convert month-year string to a Date object
const parseTenureDate = (tenure) => {
  const [month, year] = tenure.split(' ')[0].split('-');
  return new Date(`${year}-${month}-01`);
};

// Sort experiences by tenure date in descending order
const sortedExperiences = experiences.sort((a, b) => parseTenureDate(b.tenure) - parseTenureDate(a.tenure));

const About = () => {
  return (
    <div id="scroll-about" className="About">
      <div className="experience-page">
        <header className="experience-page__header">
          <h1 className="experience-page__title">My Professional Journey</h1>
          <h3 className="experience-page_subtitle">Experience</h3>
        </header>
        <section className="experience-page__content">
          {sortedExperiences.map((experience, index) => (
            <div className={`experience-page__item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <h2 className="experience-page__item-title">{experience.title}</h2>
              <p className="experience-page__item-company">{experience.company}</p>
              <p className="experience-page__item-tenure">{experience.tenure}</p>
              <p className="experience-page__item-description">{experience.description}</p>
            </div>
          ))}
        </section>
      </div>
      <div className="achievements-flowchart">
        <h2 className="achievements-flowchart__title">Achievements</h2>
        <div className="achievements-flowchart__container">
          {achievements.map((achievement, index) => (
            <div className="achievements-flowchart__item" key={index}>
              <div className="achievements-flowchart__date">{achievement.date}</div>
              <div className="achievements-flowchart__content">
                <h3 className="achievements-flowchart__item-title">{achievement.title}</h3>
                <p className="achievements-flowchart__item-description">{achievement.description}</p>
              </div>
              {index < achievements.length - 1 }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
