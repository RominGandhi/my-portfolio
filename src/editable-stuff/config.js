
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hi, I'm",
  middleName: "",
  lastName: "Romin Gandhi!",

  icons: [
    {
      image: "fa-github",
      url: "https://github.com/RominGandhi",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_romingandhii/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/romin-gandhi-857105203/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/_romingandhii",
    },
    {
      image: "fa-envelope", 
      url: "mailto:gand6363@mylaurier.ca",
    }
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  //imageSize: 375,
  message: [
    "Hi, I'm Romin Gandhi from Waterloo, Ontario. 👋"
  ],
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "RominGandhi", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Predictive-Trading-using-ML", "Valuation-Financial-Modeling-Platform", "Artificial-Intelligence-Genetic-Algorithm", "Sudoku-CSP", "A-Search-Algorithm-Puzzle-Solver","E-Commerce-Price-Scraper" ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'd love to hear from you! Whether you have an exciting idea, a question, or just want to say hi, feel free to connect with me via",
  email: "gand6363@mylaurier.ca",
  linkedin: "https://www.linkedin.com/in/romin-gandhi-857105203/",

};

const education = {
    show: true,
    heading: "Education",
    data: [
      {
        school: "Wilfrid Laurier University",
        degree: "Honours Bachelor of Science in Computer Science (BSc)",
        duration: "2022 - 2027",
        logo: require("../assets/img/wlu.png"), 
        
      },
      {
       
        school: "Lazaridis School of Business and Economics",
        degree: "Honours Bachelor of Business Administration (BBA), Finance",
        duration: "2022 - 2027",
        logo: require("../assets/img/wluLaz.png"),
    },
  ]
}

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      //companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      //companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}



// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, leadership, getInTouch, experiences, education };
