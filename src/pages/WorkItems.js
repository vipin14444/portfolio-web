import work2 from "../assets/images/work/work2.webp";
import work5 from "../assets/images/work/work5.png";
import work6 from "../assets/images/work/work6.png";
import work7 from "../assets/images/work/work7.png";
import work8 from "../assets/images/work/work8.png";
import work9 from "../assets/images/work/work9.png";

// iCurious
import ic1 from "../assets/work/iCurious/1.png";

// My Payments
import mp1 from "../assets/work/myPayments/mp1.png";
import mp2 from "../assets/work/myPayments/mp2.png";

// Ninja
import n1 from "../assets/work/ninja/n1.png";

// CommitEd
import ce1 from "../assets/work/commitEd/ce1.png";
import ce2 from "../assets/work/commitEd/ce2.png";
import ce3 from "../assets/work/commitEd/ce3.png";
import ce4 from "../assets/work/commitEd/ce4.png";
import ce5 from "../assets/work/commitEd/ce5.png";
import ce6 from "../assets/work/commitEd/ce6.png";
import ce7 from "../assets/work/commitEd/ce7.png";
import ce8 from "../assets/work/commitEd/ce8.png";
import ce9 from "../assets/work/commitEd/ce9.png";

// Walk Design Studio
import wds1 from "../assets/work/walkDesignStudio/wds1.png";
import wds2 from "../assets/work/walkDesignStudio/wds2.png";
import wds3 from "../assets/work/walkDesignStudio/wds3.png";
import wds4 from "../assets/work/walkDesignStudio/wds4.png";
import wds5 from "../assets/work/walkDesignStudio/wds5.png";

import shuru1 from "../assets/work/shuru/shuru1.png";

const workItems = [
    {
        id: "shuru",
        title: "Shuru",
        projectType: "Audio Based Social Media Platform",
        titleImage: work9,
        role: "Frontend",
        projectDescription: [
            "Shuru - Audio Based Social Media Platform.",
            "Shuru is a location based audio primary platform to bring people closer who are in each other’s vicinity in the offline world. ie: People around us. Shuru aims to empower people to discuss, interact, raise voices on key issues together, and seek help from people around them.",
        ],
        screenshots: [shuru1],
    },
    {
        id: "walkdesignstudio",
        title: "Walk Design Studio",
        projectType: "Business Website",
        titleImage: work8,
        role: "Frontend",
        projectDescription: [
            "Walk Design Studio - Business Website.",
            "This website showcases the work of the organisation and the services provided by the organisation.",
            "It also provides a way for users to connect to the organisation using email.",
        ],
        screenshots: [wds1, wds2, wds3, wds4, wds5],
    },
    {
        id: "icurious",
        title: "iCurious",
        projectType: "E-Learning Platform",
        titleImage: work7,
        role: "Full Stack",
        projectDescription: [
            "iCurious is an e-learning platform.",
            "This platform allows students to post their queries about any subject in the discussion forum so that the teachers as well as other students on the platform can help with the answers.",
            "The aim of this website is to allow students to book a tuition package from a curated list of teachers. The website is user friendly and easy to use.",
        ],
        screenshots: [ic1],
    },
    {
        id: "ninja",
        title: "Ninja",
        projectType: "Online Event Tracker",
        titleImage: work2,
        role: "Frontend",
        projectDescription: [
            "Ninja - Online event tracker",
            "Amid this pandemic situation, most of the world is moving towards the online realm.",
            "Ninja helps users find events that are being held online across various platforms such as YouTube, LinkedIn, Instagram, Facebook and Zoom.",
        ],
        screenshots: [n1],
    },
    {
        id: "my-payments",
        title: "My Payments",
        projectType: "Payments Tracker",
        titleImage: work5,
        role: "Full Stack",
        projectDescription: [
            "My Payments - Payment tracker is a easy to use transaction tracker.",
            "This app allows the user to login using their user account and track all the payments that he have made.",
        ],
        screenshots: [mp1, mp2],
    },
    {
        id: "commit-ed",
        title: "CommitEd",
        projectType: "E-Learning Platform",
        titleImage: work6,
        role: "Full Stack",
        projectDescription: [
            "CommitEd is an e-learning platform.",
            "This platform allows students to watch videos which are categorised based on the college, semester and subject that they want to study.",
            "The aim of this website is to allow students to access videos of their syllabus easily and all in one place.",
        ],
        screenshots: [ce1, ce2, ce3, ce4, ce5, ce6, ce7, ce8, ce9],
    },
];

const getWorkItem = (id) => {
    return workItems.find((x) => x.id === id);
};

export { getWorkItem };
