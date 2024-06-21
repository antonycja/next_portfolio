import { Images } from "./Images.js"

const Contents = {
    nav: {
        logo: Images.logo,
        btnText: "Download CV",
        cvLink: "docs/Antony_Maposa_-_Front_End_Web_Developer.pdf",
        navLinks: ["Home", "About", "Projects", "Contact Me"], 
        socials: [ 
            {name:"youtube", icon:Images.youtube, link: "https://www.youtube.com/c/Antonycja"}, 
            {name:"github", icon:Images.github, link: "https://github.com/antonycja"}, 
            {name:"linkedin", icon:Images.linkedin, link: "https://www.linkedin.com/in/antony-maposa/"}
        ]
    }
};

export default Contents;