import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";
import project5 from "../assets/projects/Project5.png";

export const HERO_CONTENT = `Hi, I'm Aashritha, a  computer science student at Chaitanya Bharathi Instituteof Technology in Gandipet. With a strong passion for software development, I am dedicated to building innovative and efficient solutions. My journey in computer science has been fueled by my curiosity and eagerness to learn, driving me to constantly improve my skills and stay updated with the latest industry trends.I am always eager to take on new challenges and am committed to growing both personally and professionally in the field of software development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly web applications. As a 2nd year Computer Science student , I have gained experience working with a variety of technologies,including React, Next.js, Node.js, PostgreSQL, and MongoDB. My journey in software development began with a deep curiosity for how things work, and it has evolved into a pursuit where I continuously strive to learn and adapt to new challenges.I pride myself on my strong communication skills, which allow me to effectively convey ideas and work seamlessly with team members. This, coupled with my technical proficiency, makes me confident in my ability to contribute positively to any development team.  I thrive in collaborative environments, enjoy solving complex problems, and am committed to delivering high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and enhancing my communication skills through various activities and projects.`


export const EXPERIENCES = [
  
  {
    year: "April 2024 - June 2024",
    role: "Python Development Intern",
    company: "Infosys Springboard",
    description: `Designed and developed the backend using Django, including setting up models, views, and templates for core functionalities such as employee data management, salary calculations, and payroll processing. Additionally, optimized the database schema, integrated APIs for real-time data processing, and documented the code and user manuals for ease of use.`,
    technologies: [ "Python",
      "Django",
      "Django REST Framework",
      "drf-yasg",
      "APScheduler",
      "PostgreSQL",
      
      "Swagger",
      
      ],
  },
  {
    year:'October 2023- November 2023',
    role:'Web development Intern-Affiliated with AICTE',
    company:'Coding Raja Technologies',
    description: 'As a Web Development Intern, I was responsible for designing and implementing user-friendly web applications. One of my key projects was developing a music player application. This involved building responsive front-end components using HTML, CSS, JavaScript and display music tracks dynamically. Additionally, I focused on debugging and optimizing web performance. This role honed my skills in front-end development and my ability to work effectively ',
    technologies:["HTML", "CSS","Javascript"]


  },
  
];

export const PROJECTS = [
  {
    title: "Temperature Converter",
    image: project1,
    description:
      "Developed a web application that converts temperature values between Celsius, Fahrenheit, and Kelvin. The project involved creating a user-friendly interface using basic HTML and CSS, and ensuring accurate conversions through mathematical formulas with JavaScript for the backend.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Netflix Clone",
    image: project2,
    description:
      "Created a front-end web application that mimics the user interface of Netflix. Utilized HTML, CSS, and JavaScript to design the interface and responsive design for various screen sizes.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Music Player Application",
    image: project3,
    description:
      "Built a fully functional music player web application using HTML, CSS, and JavaScript. Key features include play, pause, next, previous, shuffle, and repeat functionalities. The application also supports volume control and mute options. Integrated a dynamic playlist with album cover display, and implemented a progress bar for real-time tracking of the song’s playback.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather Detection System",
    image: project4,
    description:
      "Developed a web application using Python and Flask to fetch and display real-time weather data from an external API. The system takes city input from users and provides weather forecasts, including information such as temperature, humidity, and weather conditions. Focused on creating an intuitive frontend and basic backend functionality.",
    technologies: ["Python", "Flask", "HTML", "CSS"],
  },
  {
    title: "Payroll Service",
    image: project5,
    description:
      "Designed and implemented a comprehensive payroll service system to streamline and automate payroll management for employers and employees. The system offers robust features for managing employer and user data, processing leave applications, calculating payroll, and notifying users of critical updates. Developed using Python, this project utilizes CRUD APIs, APScheduler for task automation, and an email notification system to enhance efficiency and user experience.",
    technologies: ["Python", "CRUD APIs", "APScheduler", "Email notification system"],
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  mail: "mslaashritha7@gmail.com",
};

export const blogsData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    author: "John Doe",
    date: "2024-07-04",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["React", "JavaScript", "Hooks"],
  },
  {
    id: 2,
    title: "Node.js Best Practices",
    author: "Jane Smith",
    date: "2024-07-03",
    content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames...",
    tags: ["Node.js", "JavaScript", "Best Practices"],
  },
  {
    id: 3,
    title: "CSS Tips for Beginners",
    author: "Emily Brown",
    date: "2024-07-02",
    content: "Nullam dictum felis eu pede mollis pretium...",
    tags: ["CSS", "Frontend Development"],
  },
  // Add more blog posts as needed
];
