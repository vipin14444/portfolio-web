import work2 from '../assets/images/work/work2.webp'
import work5 from '../assets/images/work/work5.png'
import work6 from '../assets/images/work/work6.png'
import work7 from '../assets/images/work/work7.png'

// iCurious
import ic1 from '../assets/work/iCurious/1.png'

// My Payments
import mp1 from '../assets/work/myPayments/mp1.png'
import mp2 from '../assets/work/myPayments/mp2.png'

// Ninja
import n1 from '../assets/work/ninja/n1.png'

// CommitEd
import ce1 from '../assets/work/commitEd/ce1.png'
import ce2 from '../assets/work/commitEd/ce2.png'
import ce3 from '../assets/work/commitEd/ce3.png'
import ce4 from '../assets/work/commitEd/ce4.png'
import ce5 from '../assets/work/commitEd/ce5.png'
import ce6 from '../assets/work/commitEd/ce6.png'
import ce7 from '../assets/work/commitEd/ce7.png'
import ce8 from '../assets/work/commitEd/ce8.png'
import ce9 from '../assets/work/commitEd/ce9.png'

const workItems = [
    {
        id: 'icurious',
        title: 'iCurious',
        projectType: 'E-Learning Platform',
        titleImage: work7,
        role: 'Full Stack',
        projectDescription: [
            'iCurious is an e-learning platform.',
            'This platform allows students to post their queries about any subject in the discussion forum so that the teachers as well as other students on the platform can help with the answers.',
            'The aim of this website is to allow students to book a tuition package from a curated list of teachers. The website is user friendly and easy to use.'
        ],
        screenshots: [
            ic1
        ]
    },
    {
        id: 'ninja',
        title: 'Ninja',
        projectType: 'Online Event Tracker',
        titleImage: work2,
        role: 'Frontend',
        projectDescription: [
            'Ninja - Online event tracker',
            'Amid this pandemic situation, most of the world is moving towards the online realm.',
            'Ninja helps users find events that are being held online across various platforms such as YouTube, LinkedIn, Instagram, Facebook and Zoom.'
        ],
        screenshots: [
            n1
        ]
    },
    {
        id: 'my-payments',
        title: 'My Payments',
        projectType: 'Payments Tracker',
        titleImage: work5,
        role: 'Full Stack',
        projectDescription: [
            'My Payments - Payment tracker is a easy to use transaction tracker.',
            'This app allows the user to login using their user account and track all the payments that he have made.'
        ],
        screenshots: [
            mp1,
            mp2
        ]
    },
    {
        id: 'commit-ed',
        title: 'CommitEd',
        projectType: 'E-Learning Platform',
        titleImage: work6,
        role: 'Full Stack',
        projectDescription: [
            'CommitEd is an e-learning platform.',
            'This platform allows students to watch videos which are categorised based on the college, semester and subject that they want to study.',
            'The aim of this website is to allow students to access videos of their syllabus easily and all in one place.'
        ],
        screenshots: [
            ce1,
            ce2,
            ce3,
            ce4,
            ce5,
            ce6,
            ce7,
            ce8,
            ce9,
        ]
    },
]

const getWorkItem = (id) => {
    return workItems.find(x => x.id === id)
}

export {
    getWorkItem
}