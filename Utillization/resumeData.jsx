
import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Assignment, AssignmentOutlined, Language, WebOutlined } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { DeliveryDiningTwoTone } from "@mui/icons-material";
export default {
  name: "Emilia Rose",
  title: "Front end developer",
  birthday: "23th june 1995",
  email: "Emilia@gmail.com",
  phone: "123 455 9078",
  address: "12th GlassGlow St",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Emila's Coding",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://www.twitter.com",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.LinkedIn.com",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.Github.com",
      text: "MyGitHub",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Hi, my name is Rob Geis and I am currently in grade 12. I have been at County High School for a year now; I joined at the start of 11th grade, and have thoroughly enjoyed myself here. The school is great, the people are fantastic and the atmosphere is one that makes you actually want to go to school. Before I joined ASB I was studying at the Singapore American School for two years and prior to that I was at the International School of Kuala Lumpur for two years. I was born and raised here in Bombay city and grew up here.I am an interesting, fun loving guy with a good sense of humor. One thing about me that is important to know though is that at first I come of as a very shy individualistic guy but once I get to know people and are comfortable with my environment I am great. It is hard for me to make friends but once I make them, it’s great and I am all different.     I joke, laugh and humor people and I also get as much as I give. I am a very kind, compassionate, sensitive guy as my close friends will tell you. I have a tough shell but on the inside I am soft. I am also a very principled person and stand strong on what is right and wrong. I am also a very straight and honest person. I understand and know that we all put on a show sometimes and do not show who we really are or what we feel but some people do this constantly and those kinds of people I cannot stand.",

  experiences: [
    {
      title: "Work 1",
      date: "2018 - Present",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
    {
      title: "Work 2",
      date: "2014 - 2015",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
    {
      title: "Work 3",
      date: "2015 - 2018",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
  ],

  educations: [
    {
      title: "Education 1",
      date: "2018 - Present",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
    {
      title: "Education 2",
      date: "2014 - 2015",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
    {
      title: "Education 3",
      date: "2015 - 2018",
      description:
        "Spearheaded the development of a visually stunning and responsive website for a major client, resulting in a 30% increase in user engagement and a 20% boost in conversions. Leveraged HTML, CSS, and JavaScript to create a seamless user experience across multiple devices and browsers.",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I am a perserving Web Developer for 10 years",
      icon: <WebOutlined />,
    },

    {
      title: "Branding Identity",
      description: "We will make you a brand that is catchy and leaves a trace",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Illustrator",
      description: "I have been working on the illustration designs for 6 years",
      icon: < EditNoteIcon/>,
    },
    {
      title: "Fast Delivery",
      description: "I deliver your bussiness as fast as possible",
      icon: <DeliveryDiningTwoTone />,
    },
  ],

  skills:[
   {
    title:"FRONT END",
    description:[
      "React-Js",
      "JavaScript",
      "TypeScript",
      "Material-UI",
      "Bootstrap",
  
  ],
   },

   {
    title:"BACK END",
    description:[
      "Node-Js",
      "Python",
      "Java",
      "Solidity",
  ],
   },

   {
    title:"SOURCE CONTROL",
    description:[
      "Git",
      "GitHub",
      "Scrum / Agile"
  
  ],
   },

   {
    title:"DATABASES",
    description:[
      "Firebase",
      "My SQL server",
      "MYSQL",
      "MongoDB",
  ],
   },
  ],

  projects:[
    {
      tag:'React',
      caption:'A short description',
      image:'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title:'React Project 1',
      description:'This is my Project description.Please fill it in',

      links:[
        {link: 'https://www.google.com', icon: <YouTube />},
        {link: 'https://www.google.com', icon: <GitHubIcon />},
        {link: 'https://www.google.com', icon: <Language />},
      ],
    },
    {
      tag:'React',
      caption:'A short description',
      image:'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title:' React Project 2',
      description:'This is my Project description.Please fill it in',

      links:[
        {link: 'https://www.google.com', icon: <YouTube />},
        {link: 'https://www.google.com', icon: <GitHubIcon />},
        {link: 'https://www.google.com', icon: <Language />},
      ],
    },
    {
      tag:'Python',
      caption:'A short description',
      image:'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title:'Python Project 1',
      description:'This is my Project description.Please fill it in',

      links:[
        {link: 'https://www.google.com', icon: <YouTube />},
        {link: 'https://www.google.com', icon: <GitHubIcon />},
        {link: 'https://www.google.com', icon: <Language />},
      ],
    },
    {
      tag:'Java',
      caption:'A short description',
      image:'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title:' Java Project 1',
      description:'This is my Project description.Please fill it in',

      links:[
        {link: 'https://www.google.com', icon: <YouTube />},
        {link: 'https://www.google.com', icon: <GitHubIcon />},
        {link: 'https://www.google.com', icon: <Language />},
      ],
    },
  ],
};
