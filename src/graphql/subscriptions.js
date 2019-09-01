/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkplace = `subscription OnCreateWorkplace {
  onCreateWorkplace {
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
export const onUpdateWorkplace = `subscription OnUpdateWorkplace {
  onUpdateWorkplace {
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
export const onDeleteWorkplace = `subscription OnDeleteWorkplace {
  onDeleteWorkplace {
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
export const onCreateTea = `subscription OnCreateTea {
  onCreateTea {
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
export const onUpdateTea = `subscription OnUpdateTea {
  onUpdateTea {
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
export const onDeleteTea = `subscription OnDeleteTea {
  onDeleteTea {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
