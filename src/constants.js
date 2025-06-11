// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import aws from './assets/tech_logo/aws.webp';
import rendor from './assets/tech_logo/rendor.png';

import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo }, 
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
     
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
    {name : 'rendor' , logo : rendor},
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Aws', logo: aws },

      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Frontend Developer",
      company: "TechnoHacks Edutech",
      date: "August 2023 - Sep 2023",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
       
      ],
    },
    
  ];
  
  export const education = [
   
    {
      id: 1,
      img: bsaLogo,
      school: "Rd Engineering College, Ghaziabad",
      date: "june 2021 - june 2025",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech.) from Rd Engineering College, Ghaziabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Rd Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shambhu Dayal Global School, Ghaziabad",
      date: "Apr 2020 - March 2021",
      grade: "70%",
      desc: "I completed my class 12 education from Shambhu Dayal Global School, Ghaziabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Shambhu Dayal Global School, Ghaziabad",
      date: "Apr 2018 - March 2019",
      grade: "87.5%",
      desc: "I completed my class 10 education from Shambhu Dayal Global School, Ghaziabad, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "HospiTax - Healthcare Management Platform",
      description:
      "Built a full-stack hospital portal allowing patients to register, login, and book appointments , Implemented authentication for both admin and patients with role - based access, Admins can manage doctors and appointments; patients can view schedules and history and Payment Gateway implemented with Stripe.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API" , "Node.Js" , "Express", "MongoDB", "Stripe" , "JsonWebToken" , "Tailwind CSS"],
      github: "https://github.com/durgeshsharrma/HospiTrax/",
      webapp: "https://hospitrax.onrender.com/",
    },
    {
      id: 1,
      title: "WanderList - Fond Of Travellers",
      description:
        "A full-stack Resort Booking platform designed for Travellers. The platform offers comprehensive Listing Property and detailed Information About Listing,Also User Can List Thier Property or Resort As admin, helping users to Find their Resorts or place for their journey effectively.",
      image: csprepLogo,
      tags: ["Ejs", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript" , "API" , "Passport" , "Bootstrap"],
      github: "https://github.com/durgeshsharrma/wanderListin",
      webapp: "https://wanderliistt.onrender.com/",
    },
    {
      id: 2,
      title: "Url Shortner",
      description:
        "Web application that provides Shortend Of Any large url , User can Login and then they can shortend any url. The intuitive design and smooth experience make it a go-to app for anyone looking to simplify their web links.",
      image: movierecLogo,
      tags: ["EJS", "API", "HTML", "CSS", "JavaScript" , "NodeJS" , "Express", "MongoDB", "Bootstrap", "Passport - Authentication"],
      github: "https://github.com/durgeshsharrma/urlShortner", 
      webapp: "https://url-shortner-2rb9.onrender.com/",
    },

    {
      id: 2,
      title: "Amazon Clone",
      description:
        "frontend  clone of Amazon, where users can browse products, add them to their cart, and proceed to checkout. The application features a user-friendly interface, product listings, and a secure payment gateway.",
      image: taskremLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/durgeshsharrma/Amazon-Clone-Project",
      webapp: "https://durgeshsharrma.github.io/Amazon-Clone-Project/",
    },

    
  ];  