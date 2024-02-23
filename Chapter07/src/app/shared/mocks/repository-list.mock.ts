import { Repository } from '../domain/repository';

export const repositoriesMocked: Repository[] = [
    {
        name: "example-repo-1",
        html_url: "https://github.com/example/example-repo-1",
        description: "This is an example repository.",
        fork: false,
        stargazers_count: 100,
        language: "TypeScript",
        forks_count: 20
    },
    {
        name: "example-repo-2",
        html_url: "https://github.com/example/example-repo-2",
        description: "Another example repository.",
        fork: true,
        stargazers_count: 50,
        language: "JavaScript",
        forks_count: 10
    },
    {
        name: "example-repo-3",
        html_url: "https://github.com/example/example-repo-3",
        description: "Yet another example repository.",
        fork: false,
        stargazers_count: 200,
        language: "Python",
        forks_count: 30
    },
    // Add more mock repositories as needed
];
