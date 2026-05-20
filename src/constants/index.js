import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";
import project5 from "../assets/projects/Project5.png";
import openshift from "../assets/projects/openshift.png";
import e_commerce from "../assets/projects/e-commerce.png";
import f3n from "../assets/projects/F3N.png";

export const HERO_CONTENT = `Hi, I'm Aashritha, a Computer Science graduate from Chaitanya Bharathi Institute of Technology (CBIT). I am passionate about software engineering, full stack development, and Generative AI, with a strong interest in building impactful digital solutions. I enjoy solving real-world problems, exploring emerging technologies, and continuously improving my technical skills through projects and practical experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile Software Engineer with experience in developing responsive and scalable web applications. My expertise includes React.js, Node.js, Python, Django, MongoDB, PostgreSQL, and Generative AI technologies. I enjoy creating efficient, user-friendly solutions that combine clean design with strong functionality.

Through internships, projects, hackathons, and leadership roles, I have strengthened my problem-solving, communication, and teamwork skills while working in collaborative and fast-paced environments. I am always eager to learn new technologies, take on challenging opportunities, and build innovative applications that create real-world impact.`


export const EXPERIENCES = [

  {
  year: "June 2025 - July 2025",
  role: "Technology Summer Intern",
  company: "Barclays",
  description: `Worked on optimizing OpenShift cluster performance and improving infrastructure efficiency through dynamic resource provisioning and workload scaling. Developed solutions for centralized multi-cluster management and implemented pod health analytics to reduce manual monitoring efforts. Improved processing efficiency by 87.5%, achieved nearly 10% cost savings through optimized scaling, and reduced response time from ~4 seconds to under 1 second using efficient caching mechanisms and API optimization.`,
  technologies: [
    "AngularJS",
    "Node.js",
    "Express.js",
    "Shell Scripting",
    "Docker",
    "GitLab CI/CD",
    "Nexus Repository",
    "OpenShift",
  ],
},
  
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
    title: "Hybrid AI Clinical Assistant",
    image: f3n,
    description:
      "Developed an AI-powered clinical assistant to generate SOAP notes from doctor-patient conversations using FLAN-T5 and Whisper. Implemented NER-based clinical entity extraction and chunk-based processing for long conversations to reduce hallucinations. Built a React frontend integrated with a FastAPI backend for real-time medical transcription and report generation.",
    technologies: [
      "Python",
      "React",
      "FastAPI",
      "FLAN-T5",
      "MongoDB Atlas",
    ],
  },

  {
    title: "OpenShift Patching Optimization",
    image: openshift,
    description:
      "Developed a Node.js service to automate OpenShift container optimization through GitLab CI/CD pipelines. Integrated real-time pod metric analysis, HPA-based autoscaling, centralized logging, and React.js dashboard monitoring while optimizing API interactions through a unified orchestrated endpoint.",
    technologies: [
      "React.js",
      "Node.js",
      "OpenShift",
      "Docker",
      "Shell Scripting",
      "GitLab CI/CD",
    ],
  },

  {
    title: "Fashion Factory - E-commerce Platform",
    image: e_commerce,
    description:
      "Built a full-stack e-commerce web application with secure authentication, shopping cart, order management, and Stripe payment integration. Developed responsive frontend interfaces and scalable backend services to support seamless product browsing and transaction processing.",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
  },

 

  {
    title: "Payroll Service",
    image: project5,
    description:
      "Designed and implemented a comprehensive payroll service system to streamline and automate payroll management for employers and employees. Developed CRUD APIs, leave management workflows, payroll calculation modules, APScheduler-based automation, and email notification systems to improve efficiency and user experience.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "APScheduler",
    ],
  },
   {
    title: "Music Player Application",
    image: project3,
    description:
      "Built a fully functional music player web application using HTML, CSS, and JavaScript. Key features include play, pause, next, previous, shuffle, and repeat functionalities. The application also supports volume control and mute options. Integrated a dynamic playlist with album cover display and implemented a progress bar for real-time playback tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 7396715060 ",
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
