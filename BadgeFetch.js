import graphqlRequest from 'graphql-request';
const { request } = graphqlRequest;

export default function getBadges(query, gqlEndpoint, getBadgesCallback) {
  request(gqlEndpoint, query).then((data) => getBadgesCallback(data.badgeAwards))
  .catch(e => console.log(e));;
}