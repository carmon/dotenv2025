export default async (query: string) => 
  await fetch(
    'https://api.github.com/graphql',
    {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${process.env.GH_PA_TOKEN}`
      },
      body: JSON.stringify({ query }),
    }
  );