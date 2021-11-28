const { gql } = require("graphql-request");
const { fetchBadgesAndGenerateTree } = require("../index.js");

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
  const mTree = await fetchBadgesAndGenerateTree(
    GQL_QUERY, 
    GQL_ENDPOINT
  );
  console.log(mTree.toString());
}