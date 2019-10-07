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
        identifier
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
        identifier
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
        identifier
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
    identifier
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
        identifier
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
    identifier
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
        identifier
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
    identifier
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
        identifier
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
    identifier
    createdAt
    tea {
      id
      content
      up
      down
      ip
      identifier
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
    identifier
    createdAt
    tea {
      id
      content
      up
      down
      ip
      identifier
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
    identifier
    createdAt
    tea {
      id
      content
      up
      down
      ip
      identifier
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
export const onCreateFlaggedTea = `subscription OnCreateFlaggedTea {
  onCreateFlaggedTea {
    id
    teaId
  }
}
`;
export const onUpdateFlaggedTea = `subscription OnUpdateFlaggedTea {
  onUpdateFlaggedTea {
    id
    teaId
  }
}
`;
export const onDeleteFlaggedTea = `subscription OnDeleteFlaggedTea {
  onDeleteFlaggedTea {
    id
    teaId
  }
}
`;
export const onCreateFlaggedComment = `subscription OnCreateFlaggedComment {
  onCreateFlaggedComment {
    id
    comment
    commentId
  }
}
`;
export const onUpdateFlaggedComment = `subscription OnUpdateFlaggedComment {
  onUpdateFlaggedComment {
    id
    comment
    commentId
  }
}
`;
export const onDeleteFlaggedComment = `subscription OnDeleteFlaggedComment {
  onDeleteFlaggedComment {
    id
    comment
    commentId
  }
}
`;
export const onCreateAgreedToEula = `subscription OnCreateAgreedToEula {
  onCreateAgreedToEULA {
    id
    identifier
    ip
    agreed
  }
}
`;
export const onUpdateAgreedToEula = `subscription OnUpdateAgreedToEula {
  onUpdateAgreedToEULA {
    id
    identifier
    ip
    agreed
  }
}
`;
export const onDeleteAgreedToEula = `subscription OnDeleteAgreedToEula {
  onDeleteAgreedToEULA {
    id
    identifier
    ip
    agreed
  }
}
`;
export const onCreateBlockedUsers = `subscription OnCreateBlockedUsers {
  onCreateBlockedUsers {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const onUpdateBlockedUsers = `subscription OnUpdateBlockedUsers {
  onUpdateBlockedUsers {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const onDeleteBlockedUsers = `subscription OnDeleteBlockedUsers {
  onDeleteBlockedUsers {
    id
    identifier
    ip
    blockedIdentifier
    blockedIP
  }
}
`;
export const onCreateBlockedContent = `subscription OnCreateBlockedContent {
  onCreateBlockedContent {
    id
    identifier
    commentId
    teaId
  }
}
`;
export const onUpdateBlockedContent = `subscription OnUpdateBlockedContent {
  onUpdateBlockedContent {
    id
    identifier
    commentId
    teaId
  }
}
`;
export const onDeleteBlockedContent = `subscription OnDeleteBlockedContent {
  onDeleteBlockedContent {
    id
    identifier
    commentId
    teaId
  }
}
`;
