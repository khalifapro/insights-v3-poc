import { Project } from "./project"

export const Projects: Project[] = [
    {
        name: "Cloud Native Computing Foundation (CNCF)",
        tags: ["Cloud", "Containers & Virtualization"],
        subProjects: 140,
        commits: 1180000,
        contributors: 143040,
        pullrequests: 924440,
        linesOfCode: 509200000,
        logo: "https://lf-master-project-logos-prod.s3.us-east-2.amazonaws.com/cncf.svg"
    },
    {
        name: "OpenJS Foundation",
        tags: ["Web & Application Development"],
        subProjects: 31,
        commits: 526500,
        contributors: 103140,
        pullrequests: 236320,
        linesOfCode: 149540000,
        logo: "https://lf-master-project-logos-prod.s3.us-east-2.amazonaws.com/openjsfoundation-color.svg"
    },
    {
        name: "The Linux Kernel Organization",
        tags: ["Linux Kernel"],
        subProjects: 0,
        commits: 1160000,
        contributors: 38230,
        pullrequests: 0,
        linesOfCode: 25010000,
        logo: "https://lf-master-project-logos-prod.s3.us-east-2.amazonaws.com/korg.svg"
    }
]