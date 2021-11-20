import getBadges from './BadgeFetch.js';
import BMerkle from './BMerkle.js';

async function fetchBadgesAndGenerateTree(gqlEndpoint, callback) {
  getBadges(gqlEndpoint, (badges) => {
    callback(BMerkle.merkleTreeForBadges(badges));
  });
}

function badgesToMerkleTree(badges) {
  return BMerkle.merkleTreeForBadges(badges);
}

export default { fetchBadgesAndGenerateTree, badgesToMerkleTree };