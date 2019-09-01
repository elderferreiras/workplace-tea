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
    createdAt
    tea {
      id
      content
      up
      down
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    author
    createdAt
    tea {
      id
      content
      up
      down
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
    createdAt
    tea {
      id
      content
      up
      down
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
