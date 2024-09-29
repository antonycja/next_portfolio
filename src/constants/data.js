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
    },
    about: {
        title_img: Images.card_title,
        whoami: { title: "whoami", text: "This is dummy text. The text inside the card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus eos tempore sed, aliquid eius fugit aspernatur! Enim amet optio exercitationem temporibus mollitia numquam soluta expedita delectus aspernatur. Similique, minus culpa!" },

        skills: {
            title: "skills",
            skills: { python: "python", javascript: "javascript", java: "java", react: "reactjs", html5: "html5", css3: "css3", nodedotjs: "node.js", express: "expressjs", nextdotjs: "next.js", sqlite: "sqlite", tailwindcss: "tailwindcss", mongodb: "mongodb", testinglibrary: "Testing", docker: "docker", git: "git", github: "github", gitlab: "gitlab", visualstudiocode: "vscode", figma: "figma", }
        }
    },
    projects: []

    
    // sections: { home: {}, about: {}, projects: {}, contact: {} }
};

export default Contents;