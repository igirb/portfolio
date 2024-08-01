import {
    cybersec,
    uiux,
    devops,
    fullstack,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    tailwind,
    mongodb,
    java,
    git,
    figma,
    docker,
    aws,
    jenkins,
    kubernetes,
    starbucks,
    corvin,
    unideb,
    codecool,
    cyber,
    moviedb,
    dungeon,
    aiconf,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: fullstack,
    },
    {
        title: "DevOps Engineer",
        icon: devops,
    },
    {
        title: "Cybersecurity Engineer",
        icon: cybersec,
    },
    {
        title: "UI / UX Designer",
        icon: uiux,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "kubernetes",
        icon: kubernetes,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "jenkins",
        icon: jenkins,
    },
    {
        name: "java",
        icon: java,
    },
];

const experiences = [
    {
        title: "Horticultural Engineering - Plant Doctor Trainee",
        company_name: "University of Debrecen",
        icon: unideb,
        iconBg: "#ffffff",
        date: "Sept 2020 - June 2021",
        points: [
            "Investigating the problem of white mold (Sclerotinia sclerotiorum) affecting over 500 host plants worldwide.",
            "Observing a significant outbreak in watercress plants within the aquaponic system.",
            "Exploring alternative solutions due to the unsuitability of conventional pesticides in aquaponic systems.",
            "Researching the efficacy of essential oils extracted from medicinal and aromatic plants to inhibit fungal growth.",
            "Testing various essential oil combinations for their effectiveness in protecting plants within aquaponic systems.",
            "Focusing on sustainable and economical plant protection methods that do not harm aquatic organisms.",
        ],
    },
    {
        title: "UI/UX Designer - Student",
        company_name: "Corvin Art School",
        icon: corvin,
        iconBg: "#ffffff",
        date: "Oct 2021 - June 2024",
        points: [
            "Creating intuitive user flows and user-centered design solutions for school projects.",
            "Utilizing Adobe InDesign and Adobe Creative Suite for visual communication and design tasks.",
            "Conducting UX research to inform design decisions and improve user experience.",
            "Developing prototypes and wireframes using Figma to visualize design concepts.",
            "Applying branding and identity principles to create cohesive visual designs.",
            "Employing creative problem-solving skills to address design challenges and enhance user satisfaction.",
        ],
    },
    {
        title: "Full-Stack Developer - DevOps Engineer - Student",
        company_name: "Codecool",
        icon: codecool,
        iconBg: "#081136",
        date: "July 2023 - 2024 July",
        points: [
            "Architecting scalable infrastructure and orchestrating containerized deployments using AWS, Docker, and Kubernetes.",
            "Establishing automated CI/CD pipelines with Jenkins to streamline cloud environment workflows.",
            "Developing robust and maintainable Java applications by implementing object-oriented programming and SOLID principles.",
            "Crafting scalable database solutions with PostgreSQL and ensuring code reliability through unit testing.",
            "Building web applications using the MERN stack, including MongoDB, Express.js, React, and Node.js for full-stack development.",
            "Utilizing fundamental programming concepts in JavaScript, CSS, and Node.js, with a focus on algorithmic problem-solving.",
            "Applying Agile methodologies and Scrum practices to manage projects efficiently and foster a collaborative development environment.",
        ],
    },
    {
        title: "Key Partner - Shift Supervisor - Manager",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "July 2021 - Present",
        points: [
            "Identifying issues and implementing effective solutions.",
            "Optimizing inventory levels and ensuring accurate stock control.",
            "Delivering high-quality work consistently on time.",
            "Thinking outside the box to resolve complex challenges.",
            "Preparing and analyzing detailed financial reports.",
            "Guiding teams to success through strong leadership.",
            "Overseeing daily operations to enhance productivity and efficiency.",
            "Collaborating effectively as a team player to achieve common goals."
        ],
    },
    {
        title: "Cybersecurity Engineer - Student",
        company_name: "Obuda University",
        icon: cyber,
        iconBg: "#081136",
        date: "Sept 2024 - Present",
        points: [
            "I am thrilled to start my journey in cybersecurity engineering at Óbuda University this September!",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Favorite Movies DB",
        description:
        "With the elegance of HBO GO and the convenience of modern design, this project is your ultimate companion for organizing and remembering your favorite films. Save and categorize your must-watch movies, add personal comments, and mark them as seen or unseen with just a click. Say goodbye to forgetting that blockbuster you've been dying to watch, and hello to effortless movie management with style.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: moviedb,
        source_code_link: "https://github.com/igirb/my-fav-movies-db.git",
    },
    {
        name: "A-IDEA Conference",
        description:
            "The A-IDEA conference aims to delve into the complex relationship between artificial intelligence (AI) and human emotions, exploring how AI can understand, simulate, and influence emotions. The project involves creating a cohesive and impactful brand identity that encapsulates the essence of this theme.",
        tags: [
            {
                name: "mockup",
                color: "blue-text-gradient",
            },
            {
                name: "adobe",
                color: "green-text-gradient",
            },
            {
                name: "figma",
                color: "pink-text-gradient",
            },
        ],
        image: aiconf,
        source_code_link: "https://github.com/igirb/ai_conference.git",
    },
    {
        name: "Dungeon Crawl - Star Wars Edition",
        description:
        "Channeling the spirit of the galaxy far, far away, you'll face off against Stormtroopers, confront the formidable Dark Sidious, and rescue the wise Jedi Master Yoda. Along the way, collect powerful items, potions, and keys to unlock gates and uncover hidden treasures. May the Force be with you as you navigate the perilous depths of the dungeon!",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "springboot",
                color: "green-text-gradient",
            },
            {
                name: "javafx",
                color: "pink-text-gradient",
            },
        ],
        image: dungeon,
        source_code_link: "https://github.com/igirb/star-wars-style-dungeon-crawl.git",
    },
];

export {services, technologies, experiences, testimonials, projects};