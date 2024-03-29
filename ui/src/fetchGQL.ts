async function fetchGraphQL(
  text: string | null | undefined,
  variables: Record<string, string | number>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  // Fetch data from GitHub's GraphQL API:
  console.log('🚀 ~ file: fetchGQL.ts:14 ~ query:', text);
  console.log('🚀 ~ file: fetchGQL.ts:16 ~ variables:', variables);
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
