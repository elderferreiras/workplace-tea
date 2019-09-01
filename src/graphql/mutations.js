/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTea = `mutation CreateTea($input: CreateTeaInput!) {
  createTea(input: $input) {
    id
    content
    up
    down
    createdAt
    comments {
      items {
        id
        author
        content
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
    comments {
      items {
        id
        author
        content
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
    comments {
      items {
        id
        author
        content
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
    author
    content
    createdAt
    tea {
      id
      content
      up
      down
      createdAt
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
    author
    content
    createdAt
    tea {
      id
      content
      up
      down
      createdAt
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
    author
    content
    createdAt
    tea {
      id
      content
      up
      down
      createdAt
      comments {
        nextToken
      }
    }
  }
}
`;
