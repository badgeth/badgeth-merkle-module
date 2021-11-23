import graphqlRequest from 'graphql-request';
const { gql } = graphqlRequest;

import indexPkg from '../index.js';

const args = process.argv;
const GQL_ENDPOINT = args[2];

const GQL_QUERY = gql`
  {
    badgeAwards(first: 64, orderBy: globalBadgeNumber, where: {definition: "Captain Subgraph"}) {
      id
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

indexPkg.fetchBadgesAndGenerateTree(
  GQL_QUERY, 
  GQL_ENDPOINT, 
  (tree) => {
    console.log(tree.toString());
  }
);