import graphqlRequest from 'graphql-request';
const { gql } = graphqlRequest;

import indexPkg from '../index.js';

const args = process.argv;
const GQL_ENDPOINT = args[2];

const GQL_QUERY = gql`
  {
    badgeAwards(first: 64, orderBy: globalBadgeNumber, where: {definition: "Captain Subgraph"}) {
      globalBadgeNumber
      winner {
        id
      }
      definition {
        id
      }
    }
  }
`


logTree();

async function logTree() {
  const mTree = await indexPkg.fetchBadgesAndGenerateTree(
    GQL_QUERY, 
    GQL_ENDPOINT
  );
  console.log(mTree.toString());
}