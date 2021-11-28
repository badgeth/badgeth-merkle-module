import graphqlRequest from 'graphql-request';
const { request } = graphqlRequest;

export default async function getBadges(query, gqlEndpoint) {
  const data = await request(gqlEndpoint, query);
  return data.badgeAwards;
}