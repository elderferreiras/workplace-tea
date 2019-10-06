/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkplace = `mutation CreateWorkplace($input: CreateWorkplaceInput!) {
  createWorkplace(input: $input) {
    id
    name
    createdAt
    teas {
      items {
        id
        content
        up
        down
        ip
        createdAt
      }
      nextToken
    }
  }
}
`;
export const updateWorkplace = `mutation UpdateWorkplace($input: UpdateWorkplaceInput!) {
  updateWorkplace(input: $input) {
    id
    name
    createdAt
    teas {
      items {
        id
        content
        up
        down
        ip
        createdAt
      }
      nextToken
    }
  }
}
`;
export const deleteWorkplace = `mutation DeleteWorkplace($input: DeleteWorkplaceInput!) {
  deleteWorkplace(input: $input) {
    id
    name
    createdAt
    teas {
      items {
        id
        content
        up
        down
        ip
        createdAt
      }
      nextToken
    }
  }
}
`;
export const createTea = `mutation CreateTea($input: CreateTeaInput!) {
  createTea(input: $input) {
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
export const updateTea = `mutation UpdateTea($input: UpdateTeaInput!) {
  updateTea(input: $input) {
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
export const deleteTea = `mutation DeleteTea($input: DeleteTeaInput!) {
  deleteTea(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createBlockedIPs = `mutation CreateBlockedIPs($input: CreateBlockedIPsInput!) {
  createBlockedIPs(input: $input) {
    id
    ip
  }
}
`;
export const updateBlockedIPs = `mutation UpdateBlockedIPs($input: UpdateBlockedIPsInput!) {
  updateBlockedIPs(input: $input) {
    id
    ip
  }
}
`;
export const deleteBlockedIPs = `mutation DeleteBlockedIPs($input: DeleteBlockedIPsInput!) {
  deleteBlockedIPs(input: $input) {
    id
    ip
  }
}
`;
export const createFlaggedTea = `mutation CreateFlaggedTea($input: CreateFlaggedTeaInput!) {
  createFlaggedTea(input: $input) {
    id
    teaId
  }
}
`;
export const updateFlaggedTea = `mutation UpdateFlaggedTea($input: UpdateFlaggedTeaInput!) {
  updateFlaggedTea(input: $input) {
    id
    teaId
  }
}
`;
export const deleteFlaggedTea = `mutation DeleteFlaggedTea($input: DeleteFlaggedTeaInput!) {
  deleteFlaggedTea(input: $input) {
    id
    teaId
  }
}
`;
export const createFlaggedComment = `mutation CreateFlaggedComment($input: CreateFlaggedCommentInput!) {
  createFlaggedComment(input: $input) {
    id
    comment
    commentId
  }
}
`;
export const updateFlaggedComment = `mutation UpdateFlaggedComment($input: UpdateFlaggedCommentInput!) {
  updateFlaggedComment(input: $input) {
    id
    comment
    commentId
  }
}
`;
export const deleteFlaggedComment = `mutation DeleteFlaggedComment($input: DeleteFlaggedCommentInput!) {
  deleteFlaggedComment(input: $input) {
    id
    comment
    commentId
  }
}
`;
export const createAgreedToEula = `mutation CreateAgreedToEula($input: CreateAgreedToEULAInput!) {
  createAgreedToEULA(input: $input) {
    id
    identifier
    ip
    agreed
  }
}
`;
export const updateAgreedToEula = `mutation UpdateAgreedToEula($input: UpdateAgreedToEULAInput!) {
  updateAgreedToEULA(input: $input) {
    id
    identifier
    ip
    agreed
  }
}
`;
export const deleteAgreedToEula = `mutation DeleteAgreedToEula($input: DeleteAgreedToEULAInput!) {
  deleteAgreedToEULA(input: $input) {
    id
    identifier
    ip
    agreed
  }
}
`;
export const createBlockedUsers = `mutation CreateBlockedUsers($input: CreateBlockedUsersInput!) {
  createBlockedUsers(input: $input) {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const updateBlockedUsers = `mutation UpdateBlockedUsers($input: UpdateBlockedUsersInput!) {
  updateBlockedUsers(input: $input) {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const deleteBlockedUsers = `mutation DeleteBlockedUsers($input: DeleteBlockedUsersInput!) {
  deleteBlockedUsers(input: $input) {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const createBlockedContent = `mutation CreateBlockedContent($input: CreateBlockedContentInput!) {
  createBlockedContent(input: $input) {
    id
    identifier
    commentId
    teaId
  }
}
`;
export const updateBlockedContent = `mutation UpdateBlockedContent($input: UpdateBlockedContentInput!) {
  updateBlockedContent(input: $input) {
    id
    identifier
    commentId
    teaId
  }
}
`;
export const deleteBlockedContent = `mutation DeleteBlockedContent($input: DeleteBlockedContentInput!) {
  deleteBlockedContent(input: $input) {
    id
    identifier
    commentId
    teaId
  }
}
`;
