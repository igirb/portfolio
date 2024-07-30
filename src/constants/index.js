import {
    cybersec,
    uiux,
    devops,
    fullstack,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bluesun,
    starbucks,
    corvin,
    unideb,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
        name: "Three JS",
        icon: threejs,
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
];

const experiences = [
    {
        title: "Event Organizer - Animator Team Leader",
        company_name: "Bluesun Hotels & Resorts",
        icon: bluesun,
        iconBg: "#ffffff",
        date: "Jan 2019 - Sept 2020",
        points: [
            "Organizing and coordinating events and performances for guests.",
            "Developing and implementing engaging sports programs.",
            "Creating a vibrant and entertaining atmosphere for hotel guests.",
            "Ensuring smooth execution of all scheduled activities and events.",
            "Collaborating with other hotel departments to enhance guest satisfaction.",
            "Maintaining high standards of guest interaction and entertainment.",
            "Planning and managing resources for various events and activities.",
        ],
    },
    {
        title: "Horticultural Engineering - Plant Doctor Trainee",
        company_name: "University of Debrecen",
        icon: unideb,
        iconBg: "#ffffff",
        date: "Sept 2020 - June 2021",
        points: [
            "Investigating the problem of white mold (Sclerotinia sclerotiorum) affecting over 500 host plants worldwide.",
            "Analyzing the impact of white mold on various crops, including sunflower, soybean, rapeseed, beans, and watercress.",
            "Observing a significant outbreak in watercress plants within the aquaponic system, causing over 70% loss.",
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
            "Collaborating effectively with team members to achieve project goals.",
            "Utilizing Adobe InDesign and Adobe Creative Suite for visual communication and design tasks.",
            "Conducting UX research to inform design decisions and improve user experience.",
            "Developing prototypes and wireframes using Figma to visualize design concepts.",
            "Applying branding and identity principles to create cohesive visual designs.",
            "Employing creative problem-solving skills to address design challenges and enhance user satisfaction.",
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
            "Developing and conducting comprehensive training programs for staff.",
            "Managing and maintaining efficient facility operations.",
            "Thinking outside the box to resolve complex challenges.",
            "Preparing and analyzing detailed financial reports.",
            "Guiding teams to success through strong leadership.",
            "Overseeing daily operations to enhance productivity and efficiency.",
            "Collaborating effectively as a team player to achieve common goals."
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};