/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkplace = `query GetWorkplace($id: ID!, $sortDirection: ModelSortDirection, $limit: Int, $nextToken: String) {
  getWorkplace(id: $id) {
    id
    name
    createdAt
    teas(sortDirection: $sortDirection, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        up
        down
        ip
        createdAt
        comments {
            items {
                content
                ip
            }
        }
      }
      nextToken
    }
  }
}
`;
export const listWorkplaces = `query ListWorkplaces(
  $filter: ModelWorkplaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkplaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      teas {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTea = `query GetTea($id: ID!) {
  getTea(id: $id) {
    id
    content
    up
    down
    ip
    createdAt
    workplace {
      id
      name
      createdAt
      teas {
        nextToken
      }
    }
    comments {
      items {
        id
        content
        author
        ip
        createdAt
      }
      nextToken
    }
  }
}
`;
export const listTeas = `query ListTeas($filter: ModelTeaFilterInput, $limit: Int, $nextToken: String) {
  listTeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      up
      down
      ip
      createdAt
      workplace {
        id
        name
        createdAt
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    author
    ip
    createdAt
    tea {
      id
      content
      up
      down
      ip
      createdAt
      workplace {
        id
        name
        createdAt
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      author
      ip
      createdAt
      tea {
        id
        content
        up
        down
        ip
        createdAt
      }
    }
    nextToken
  }
}
`;
export const getBlockedIPs = `query GetBlockedIPs($ip: String!) {
  getBlockedIPs(ip: $ip) {
    id
    ip
  }
}
`;
export const listBlockedIPss = `query ListBlockedIPss(
  $ip: String
  $filter: ModelBlockedIPsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBlockedIPss(
    ip: $ip
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      ip
    }
    nextToken
  }
}
`;
