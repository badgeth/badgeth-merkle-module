import etherspkg from 'ethers';
const { ethers } = etherspkg;
import merkleTreepkg from 'merkletreejs';
const { MerkleTree } = merkleTreepkg;
import keccak256pkg from 'keccak256';
const { keccak256 } = keccak256pkg;


function hashBadge(badgeStruct) {
  return ethers.utils.solidityKeccak256(
    ['address', 'uint16', 'string'],
    [badgeStruct.winner.id, badgeStruct.globalBadgeNumber, badgeStruct.definition.id]
  );
}

function merkleTreeForBadges(badges) {
  const leaves = badges.map(badge => (hashBadge(badge)));
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  return tree;
}

function badgeToString(badge) {
  return "badge definition: " + badge.definition.id + "\nbadge winner: " + badge.winner.id + "\tbadge number: " + badge.globalBadgeNumber;
}

export default { merkleTreeForBadges, hashBadge };