const { ethers } = require('ethers');
const { MerkleTree } = require('merkletreejs');
const { keccak256 } = require('keccak256');


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

exports.merkleTreeForBadges = merkleTreeForBadges;
exports.hashBadge = hashBadge;