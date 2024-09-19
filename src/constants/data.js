import { Images } from "./Images.js"

const Contents = {
    nav: {
        logo: Images.logo,
        btnText: "Download CV",
        cvLink: "",
        navLinks: ["Home", "About", "Projects", "Contact Me"],
        socials: [
            { name: "github", icon: Images.github, link: "https://github.com/antonycja" },
            { name: "linkedin", icon: Images.linkedin, link: "https://www.linkedin.com/in/antony-maposa/" },
            { name: "youtube", icon: Images.youtube, link: "https://www.youtube.com/c/Antonycja" },
        ]
    },
    hero: {
        name: { top: "whoami", heading: "Antony Maposa", buttonText: "more about me" },
        role: { top: "echo $ROLE", heading: "software developer", buttonText: "my projects" }
    }
    // sections: { home: {}, about: {}, projects: {}, contact: {} }
};

export default Contents;