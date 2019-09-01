/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTea = `query GetTea($id: ID!) {
  getTea(id: $id) {
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
export const listTeas = `query ListTeas($filter: ModelTeaFilterInput, $limit: Int, $nextToken: String) {
  listTeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      up
      down
      createdAt
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
