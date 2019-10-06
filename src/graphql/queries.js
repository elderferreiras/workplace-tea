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
export const getFlaggedTea = `query GetFlaggedTea($teaId: String!) {
  getFlaggedTea(teaId: $teaId) {
    id
    teaId
  }
}
`;
export const listFlaggedTeas = `query ListFlaggedTeas(
  $teaId: String
  $filter: ModelFlaggedTeaFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFlaggedTeas(
    teaId: $teaId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      teaId
    }
    nextToken
  }
}
`;
export const getFlaggedComment = `query GetFlaggedComment($commentId: String!) {
  getFlaggedComment(commentId: $commentId) {
    id
    comment
    commentId
  }
}
`;
export const listFlaggedComments = `query ListFlaggedComments(
  $commentId: String
  $filter: ModelFlaggedCommentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFlaggedComments(
    commentId: $commentId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      comment
      commentId
    }
    nextToken
  }
}
`;
export const getAgreedToEula = `query GetAgreedToEula($identifier: String!) {
  getAgreedToEULA(identifier: $identifier) {
    id
    identifier
    ip
    agreed
  }
}
`;
export const listAgreedToEulAs = `query ListAgreedToEulAs(
  $identifier: String
  $filter: ModelAgreedToEULAFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAgreedToEULAs(
    identifier: $identifier
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      identifier
      ip
      agreed
    }
    nextToken
  }
}
`;
export const getBlockedUsers = `query GetBlockedUsers($identifier: String!) {
  getBlockedUsers(identifier: $identifier) {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const listBlockedUserss = `query ListBlockedUserss(
  $identifier: String
  $filter: ModelBlockedUsersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBlockedUserss(
    identifier: $identifier
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      identifier
      ip
      blockedIdentifier
      blockedIP
    }
    nextToken
  }
}
`;
export const getBlockedContent = `query GetBlockedContent($identifier: String!) {
  getBlockedContent(identifier: $identifier) {
    id
    identifier
    commentId
    teaId
  }
}
`;
export const listBlockedContents = `query ListBlockedContents(
  $identifier: String
  $filter: ModelBlockedContentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBlockedContents(
    identifier: $identifier
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      identifier
      commentId
      teaId
    }
    nextToken
  }
}
`;
