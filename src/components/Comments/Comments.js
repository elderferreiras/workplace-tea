import React from 'react';
import Comment from '../Comments/Comment/Comment';

const comments = (props) => {
    return props.comments.map(comment => <Comment
        key={comment.id}
        comment={comment.content}
        author={comment.author}
        date={comment.createdAt}
    />);
};

export default comments;