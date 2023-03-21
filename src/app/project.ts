export interface Project {
    name: string;
    tags: string[];
    subProjects: number;
    commits: number;
    contributors: number;
    pullrequests: number;
    linesOfCode: number;
    logo?: string;
}