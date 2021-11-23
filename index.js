import getBadges from './BadgeFetch.js';
import BMerkle from './BMerkle.js';

const args = process.argv;
const GQL_ENDPOINT = args[3];
const GQL_QUERY = args[2];

async function fetchBadgesAndGenerateTree(query, gqlEndpoint, callback) {
  getBadges(query, gqlEndpoint, (badges) => {
    callback(BMerkle.merkleTreeForBadges(badges));
  });
}

function badgesToMerkleTree(badges) {
  return BMerkle.merkleTreeForBadges(badges);
}

export default { fetchBadgesAndGenerateTree, badgesToMerkleTree };