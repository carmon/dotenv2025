import callGithubQL from "./lib/githubql";

type Project = {
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  languages: string[];
};

export async function getProjectsList(count: number): Promise<Project[]> {
  const res = await callGithubQL(`
    query {
      search(
        type: REPOSITORY, 
        query: "${process.env.GH_SEARCH_QUERY}",
        last: ${count}
      ) {
        repos: edges {
          repo: node {
            ... on Repository {
              name
              description
              homepageUrl
              url
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `);
  const { data: { search: { repos } } } = await res.json();
  const projects = repos.map(({ repo }) => ({ 
    ...repo, 
    languages: repo.languages.nodes.reduce((prev, curr) =>  [...prev, curr.name], []), 
  }));
  return projects;
};