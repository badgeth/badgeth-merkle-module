import etherspkg from 'ethers';
const { ethers } = etherspkg;
import merkleTreepkg from 'merkletreejs';
const { MerkleTree } = merkleTreepkg;


function hashBadge(badgeStruct) {
  return ethers.utils.soliditySha256(
    ['address', 'uint16', 'string'],
    [badgeStruct.winner.id, badgeStruct.globalBadgeNumber, badgeStruct.definition.id],
  );
}

function merkleTreeForBadges(badges) {
  const leaves = badges.map(badge => (hashBadge(badge)));
  const tree = new MerkleTree(leaves, MerkleTree.SHA256);
  return tree;
}

export default { merkleTreeForBadges, hashBadge };