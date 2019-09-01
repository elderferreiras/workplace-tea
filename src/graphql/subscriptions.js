/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTea = `subscription OnCreateTea {
  onCreateTea {
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
export const onUpdateTea = `subscription OnUpdateTea {
  onUpdateTea {
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
export const onDeleteTea = `subscription OnDeleteTea {
  onDeleteTea {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
