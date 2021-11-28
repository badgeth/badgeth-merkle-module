const { getBadges } = require('./BadgeFetch.js');
const { merkleTreeForBadges } = require('./BMerkle.js');

async function fetchBadgesAndGenerateTree(query, gqlEndpoint) {
  const badges = await getBadges(query, gqlEndpoint);
  const mTree = merkleTreeForBadges(badges);
  return mTree;
}

function badgesToMerkleTree(badges) {
  return merkleTreeForBadges(badges);
}

exports.fetchBadgesAndGenerateTree = fetchBadgesAndGenerateTree;
exports.badgesToMerkleTree = badgesToMerkleTree;