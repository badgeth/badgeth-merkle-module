import graphqlRequest from 'graphql-request';
const { request, gql } = graphqlRequest;

const query = gql`
  {
    badgeAwards(first: 64, orderBy: globalBadgeNumber, where: {definition: "Captain Subgraph"}) {
      id
      globalBadgeNumber
      winner {
        id
      }
    }
  }
`

export default function getBadges(gqlEndpoint, getBadgesCallback) {
  request(gqlEndpoint, query).then((data) => getBadgesCallback(data.badgeAwards));
}