# badgeth-merkle-module

### Get a merkle tree of badgeAwards from a Badgeth compatible subgraph
```js
import { fetchBadgesAndGenerateTree } from 'merkle-badges'

const GQL_ENDPOINT = "https://api.studio.thegraph.com/query/0000"
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
const mTree = await indexPkg.fetchBadgesAndGenerateTree(
  GQL_QUERY, 
  GQL_ENDPOINT
);
```

