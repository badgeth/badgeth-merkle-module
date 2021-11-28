const { request } = require("graphql-request");

async function getBadges(query, gqlEndpoint) {
  const data = await request(gqlEndpoint, query);
  return data.badgeAwards;
}

exports.getBadges = getBadges;