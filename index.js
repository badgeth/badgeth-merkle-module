import getBadges from './BadgeFetch.js';
import BMerkle from './BMerkle.js';

async function fetchBadgesAndGenerateTree(query, gqlEndpoint) {
  const badges = await getBadges(query, gqlEndpoint);
  const mTree = badgesToMerkleTree(badges);
  return mTree;
}

function badgesToMerkleTree(badges) {
  return BMerkle.merkleTreeForBadges(badges);
}

export default { fetchBadgesAndGenerateTree, badgesToMerkleTree };