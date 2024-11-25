import { Images } from "./Images.js"
const d = new Date();
let year = d.getFullYear();
const Contents = {
    nav: {
        logo: Images.logo,
        btnText: "Download CV",
        cvLink: "/cv.pdf",
        sections: [
            { id: 'Home', title: 'Home' },
            { id: 'About', title: 'About' },
            { id: 'Projects', title: 'Projects' },
            { id: 'Contact', title: 'Contact Me' }
        ],
        socials: [
            { name: "github", icon: Images.github, link: "https://github.com/antonycja" },
            { name: "linkedin", icon: Images.linkedin, link: "https://www.linkedin.com/in/antony-maposa/" },
            { name: "youtube", icon: Images.youtube, link: "https://www.youtube.com/c/Antonycja" },
        ]
    },
    hero: {
        name: { top: "whoami", heading: "Antony Maposa", buttonText: "more about me", buttonLink: "#About" },
        role: { top: "echo $ROLE", heading: "software developer", buttonText: "my projects", buttonLink: "#Projects" }
    },
    about: {
        title_img: Images.card_title,
        whoami: { title: "whoami", text: "I’m Antony, a passionate software enthusiast with an insatiable curiosity for how things work. My coding journey began in eighth grade, sparking a love for problem-solving and creativity. I've developed projects like a maze generation algorithm and explored web development, continuously honing my skills. Overcoming challenges, including financial setbacks, has fueled my determination and deepened my passion for technology. I thrive on creating impactful solutions, and when I'm not coding, you’ll find me exploring the outdoors, seeking adventures, staying fit, or striving to level up in life." },

        skills: {
            title: "skills",
            skills: { python: "python", javascript: "javascript", java: "java", react: "reactjs", html5: "html5", css3: "css3", nodedotjs: "node.js", express: "expressjs", nextdotjs: "next.js", sqlite: "sqlite", tailwindcss: "tailwindcss", mongodb: "mongodb", testinglibrary: "Testing", docker: "docker", git: "git", github: "github", gitlab: "gitlab", visualstudiocode: "vscode", figma: "figma", }
        }
    },
    projects: [
        {
            project_images: [
                { img: Images.geri1, alt: "geri restaurant home" },
                { img: Images.geri2, alt: "geri restaurant" },
                { img: Images.geri3, alt: "geri restaurant" },
                { img: Images.geri4, alt: "geri restaurant" },
                { img: Images.geri5, alt: "geri restaurant" },
                { img: Images.geri6, alt: "geri restaurant" },

            ],
            project_name: "gericht restaurant",
            project_text: "sleek, responsive restaurant web app with an interactive menu and a modern design",
            project_tags: ["react", "react-router", "css", "swiper"],
            more: {
                project_type: "frontend website",
                live: { link: "https://codeantrestaurant.netlify.app/", text: "open live project" },
                github: { link: "https://github.com/antonycja/gericht-restaurant", text: "open project repo" },
                summary: {
                    title: "Summary",
                    text: "The Gericht Restaurant website is a sleek and modern web application that enhances a restaurant's digital presence, providing customers with an intuitive and visually appealing way to explore the menu, discover promotions, and place orders. Designed with a desktop-first approach, the site features a responsive design that ensures easy navigation on any device. The homepage welcomes users with vibrant food imagery and engaging call-to-action buttons, creating an immersive experience from the outset. The dynamic menu section allows users to filter through various dish categories, view detailed descriptions, and make informed choices. Subtle animations contribute to fluid transitions, enhancing the overall user experience without sacrificing performance."
                },
                all_features: {
                    title: "Key Features",
                    features: [
                        { key: "Responsive Design", feature: "Optimized for seamless navigation across all devices, from mobile to desktop." },
                        { key: "Dynamic Menu", feature: "A filterable menu that allows users to explore dish categories with detailed descriptions." },
                        { key: "Engaging UI", feature: "Incorporates interactive call-to-action buttons and vibrant imagery to enhance user engagement." },
                        { key: "Smooth Animations", feature: "Subtle animations provide fluid transitions, making navigation enjoyable." },
                        { key: "Accessibility", feature: "Built with accessibility in mind, ensuring all users can enjoy the site." },
                    ]
                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "React.js", feature: "Utilized for building a dynamic and responsive user interface." },
                        { key: "CSS", feature: "Used for styling the website, ensuring a modern and cohesive aesthetic." },
                        { key: "Vite", feature: "Used as the build tool for fast development and optimized production builds." },
                        { key: "React Router", feature: "Enables seamless navigation between different sections of the application." },
                        { key: "React Helmet", feature: "Manages changes to the document head for SEO optimization." },
                        { key: "Swiper", feature: "For implementing a smooth and responsive image carousel for showcasing dishes." },
                        { key: "Netlify", feature: "Hosting the site with continuous deployment for reliable and fast access." },
                        { key: "ESLint", feature: "Ensures code quality and adherence to best practices during development." },
                    ]
                }

            }
        },
        {
            card_title: "web",
            project_images: [
                { img: Images.fottis1, alt: "fottis finance" },
                { img: Images.fottis2, alt: "fottis finance" },
                { img: Images.fottis3, alt: "fottis finance" },
                { img: Images.fottis4, alt: "fottis finance" },
                { img: Images.fottis5, alt: "fottis finance" },
                { img: Images.fottis6, alt: "fottis finance" },
            ],
            project_name: "fottis finance",
            project_text: "sleek, responsive landing page for a fintech company with newsletter sign-up and modern design.",
            project_tags: ["nextJs", "tailwind", "mongodb", "nodejs"],
            more: {
                project_type: "fintech web app",
                live: { link: "https://fottis.netlify.app/", text: "open live project" },
                github: { link: "https://github.com/antonycja/fottis", text: "open project repo" },
                summary: {
                    title: "Summary",
                    text: "Fottis is a modern landing page designed for a fintech company, built to attract potential clients and provide essential information about the company. The web application enhances the client's digital presence by offering users an intuitive way to learn more about the services provided. \n The homepage captivates visitors with visually striking elements and clear call-to-action buttons, inviting them to sign up for pre-release notifications and to be placed on a waiting list. With a responsive design, users can easily navigate the site on any device, ensuring a seamless experience."
                },
                all_features: {
                    title: "Key Features",
                    features: [
                        { key: "Responsive Design", feature: "Ensures optimal viewing on all devices, from desktops to mobile phones." },
                        { key: "Sign-up Functionality", feature: "Allows users to register for pre-release notifications and waiting lists." },
                        { key: "Intuitive Navigation", feature: "User-friendly layout for effortless exploration of company information." },
                        { key: "Engaging Visuals", feature: "Eye-catching graphics and animations to attract and retain user interest." },
                        { key: "Information-Rich Content", feature: "Provides users with in-depth insights into the company's services and offerings." }
                    ]
                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "Next.js", feature: "A React framework for building server-side rendered applications." },
                        { key: "React", feature: "For building interactive user interfaces." },
                        { key: "MongoDB", feature: "For efficient database management of user sign-up data." },
                        { key: "MongoDB Atlas", feature: "Cloud-hosted database service for scalability and reliability." },
                        { key: "Netlify", feature: "For hosting the website with easy deployment." },
                        { key: "Tailwind CSS", feature: "For styling with a utility-first CSS framework." }
                    ]
                }

            }
        },
        {
            project_images: [
                { img: Images.camp1, alt: "camping site website" },
                { img: Images.camp2, alt: "camping site website" },
                { img: Images.camp3, alt: "camping site website" },
                { img: Images.camp4, alt: "camping site website" },
                { img: Images.camp5, alt: "camping site website" },
                { img: Images.camp6, alt: "camping site website" },
            ],
            project_name: "campersite",
            project_text: "platform for sharing, rating, and discovering campsites with user accounts and reviews.",
            project_tags: ["javascript", "nodejs", "css", "express"],
            more: {
                project_type: "fullstack webapp",
                live: { link: "https://campersite.onrender.com/", text: "open live project" },
                github: { link: "https://github.com/antonycja/campersite", text: "open project repo" },
                summary: { title: "summary", text: "Campersite is a full-stack web application that enables users to discover, rate, and share campsites. Users can create accounts, post new campsites, and leave comments or ratings on existing ones. The platform offers a seamless experience with account creation, post management, and interaction features, making it a valuable resource for outdoor enthusiasts. \n The website is designed to be user-friendly, with an intuitive interface for adding, editing, and viewing campsites. Campsite posts feature images, descriptions, and location details to help users find the perfect spot for their next adventure." },
                all_features: {
                    title: "Key Features",
                    features: [
                        { key: "User Accounts", feature: "Create, manage, and log in to personal accounts." },
                        { key: "Post Campsites", feature: "Share new campsite discoveries with descriptions and images." },
                        { key: "Campsite Ratings", feature: "Rate and comment on existing campsites." },
                        { key: "Interactive Map", feature: "Browse campsites using an integrated map with location pins." },
                        { key: "Responsive Design", feature: "Optimized for mobile, tablet, and desktop devices." }
                    ]
                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "HTML, CSS & Bootstrap", feature: "For structuring and styling the web pages, ensuring responsiveness." },
                        { key: "JavaScript", feature: "Handles client-side interactivity and dynamic behavior." },
                        { key: "EJS & EJS-Mate", feature: "For server-side templating and dynamic content rendering." },
                        { key: "ExpressJS & NodeJS", feature: "Backend framework for handling requests, routing, and middlewares." },
                        { key: "MongoDB & Mongoose", feature: "For database storage, management, and querying." },
                        { key: "Cloudinary", feature: "For storing and managing images uploaded by users." },
                        { key: "Mapbox SDK", feature: "Integrates interactive maps to enhance the campsite experience." },
                        { key: "PassportJS", feature: "For secure authentication and user session management." },
                        { key: "Multer", feature: "For handling multipart data and uploading images." }
                    ]
                }
            }
        },
        {
            project_images: [
                { img: Images.lpt1, alt: "lpt script" },
            ],
            project_name: "lpt (lazy people tool)",
            project_text: "script that automates accepting code reviews, cloning repositories & notifying reviewees on Slack.",
            project_tags: ["python", "selenium", "subprocess"],
            more: {
                project_type: "automation script",
                live: { link: "https://github.com/antonycja/lpt-lms", text: "open project" },
                github: { link: "https://github.com/antonycja/lpt-lms", text: "open project repo" },
                summary: { title: "summary", text: "LPT (Lazy People Tool) automates the code review process by accepting reviews, cloning repositories, and notifying reviewees on Slack. Utilizing Selenium, it securely sends messages and allows users to configure the tool with their Slack login details. These configurations are encrypted and stored securely on the device, ensuring the protection of sensitive information. This automation not only enhances collaboration among development teams but also simplifies the workflow by minimizing manual efforts in managing notifications and repository interactions." },
                all_features: {
                    title: "key features",
                    features: [
                        { key: "code_review_automation", feature: "Automatically accepts code reviews to streamline the review process." },
                        { key: "repository_cloning", feature: "Clones the relevant repositories for easy access and review." },
                        { key: "slack_notifications", feature: "Sends real-time notifications to reviewees via Slack." },
                        { key: "secure_configuration", feature: "Configures the tool with encrypted Slack login details for security." },
                        { key: "environment_compatibility", feature: "Works across various operating systems for broad usability." },
                        { key: "error_handling", feature: "Implements error handling to manage exceptions gracefully." }
                    ]

                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "python", feature: "Python for scripting and automation." },
                        { key: "yaml", feature: "YAML for configuration file management." },
                        { key: "cryptography", feature: "Cryptography for secure storage of login details." },
                        { key: "selenium", feature: "Selenium for automating web browser interactions." },
                        { key: "os", feature: "OS module for environment and directory management." },
                        { key: "getpass", feature: "Getpass for securely handling password input." },
                        { key: "subprocess", feature: "Subprocess for executing system commands." },
                        { key: "tqdm", feature: "TQDM for progress bar visualization during execution." },
                        { key: "time", feature: "Time module for adding delays in automation." },
                    ]

                }
            }
        },
        {
            project_images: [
                { img: Images.maze1, alt: "a maze image" },
                { img: Images.maze2, alt: "a maze image" }
            ],
            project_name: "Maze Gen & Solve",
            project_text: "random maze generation and solving program that uses depth-first-search algorithm.",
            project_tags: ["python", "DSA", "turtle", "unittest"],
            more: {
                project_type: "Data Structures & Algorithms",
                live: { link: "link", text: "open project demo" },
                github: { link: "https://github.com/antonycja/maze-generation", text: "open project repo" },
                summary: { title: "summary", text: "I built a real-time maze generation and solving program using the depth-first search algorithm, visualized with Python's Turtle graphics. The maze is generated step by step, allowing users to watch the process unfold. Similarly, the solver navigates the maze in real time, dynamically finding its way from start to finish. This project combines algorithmic problem-solving with engaging visual feedback, demonstrating my skills in creating interactive experiences through code. It showcases my ability to work with algorithms and bring them to life in a visually intuitive manner." },
                all_features: {
                    title: "Key Features",
                    features: [
                        { key: "real_time", feature: "Real-time maze generation and visualization using Turtle graphics." },
                        { key: "algorithm", feature: "Depth-first search algorithm for maze solving." },
                        { key: "interactive", feature: "Interactive experience allowing users to watch maze creation and solving." },
                        { key: "user_input", feature: "Customizable maze size based on user input." },
                        { key: "animation", feature: "Smooth animation of the maze solving process." },
                        { key: "complexity", feature: "Ability to generate mazes with varying complexity levels." },
                    ]
                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "python", feature: "Used for implementing the maze generation and solving logic." },
                        { key: "turtle", feature: "Utilized for real-time graphics and visualization of the maze." },
                        { key: "depth_first_search", feature: "Algorithm employed to find solutions in the maze." },
                        { key: "data_structures", feature: "Stack data structure used for backtracking during maze solving." },
                        { key: "visualization", feature: "Real-time visualization techniques for dynamic user interaction." },
                    ]
                }

            }
        },
        {
            card_title: "web",
            project_images: [
                { img: Images.fottis1, alt: "fottis finance" },
                { img: Images.geri, alt: "geri restaurant" }
            ],
            project_name: "coming soon",
            project_text: "template ",
            project_tags: ["tag1", "tag2", "tag3"],
            more: {
                project_type: "project type",
                live: { link: "link", text: "open live project" },
                github: { link: "link", text: "open project repo" },
                summary: { title: "summary", text: "something was not right" },
                all_features: {
                    title: "key features",
                    features: [
                        { key: "feature1", feature: "this is it" },
                        { key: "feature2", feature: "and this is just another one" },
                    ]
                },
                all_technologies: {
                    title: "Technologies Used",
                    technologies: [
                        { key: "tech", technology: "" },
                        { key: "", technology: "" },
                    ]
                }
            }
        },


    ],
    contact: {
        lottieAnimation: "https://assets4.lottiefiles.com/packages/lf20_cbc2dy5y.json",
        heading: "Like what you see?",
        subHeading: "Let's talk.",
        btnText: "Submit",
        email: "cjamaposa@gmail.com",
    },
    
    footer: `Copyright ${year} by AntonyCJA. All rights reserved.`

    // sections: { home: {}, about: {}, projects: {}, contact: {} }
};

export default Contents;