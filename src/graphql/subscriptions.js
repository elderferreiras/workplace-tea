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
        ip
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
        ip
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
        ip
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
export const onUpdateTea = `subscription OnUpdateTea {
  onUpdateTea {
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
export const onDeleteTea = `subscription OnDeleteTea {
  onDeleteTea {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateBlockedIPs = `subscription OnCreateBlockedIPs {
  onCreateBlockedIPs {
    id
    ip
  }
}
`;
export const onUpdateBlockedIPs = `subscription OnUpdateBlockedIPs {
  onUpdateBlockedIPs {
    id
    ip
  }
}
`;
export const onDeleteBlockedIPs = `subscription OnDeleteBlockedIPs {
  onDeleteBlockedIPs {
    id
    ip
  }
}
`;
