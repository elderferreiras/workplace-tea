import React from 'react';
import Comment from '../Comments/Comment/Comment';

const comments = (props) => {
    return props.comments.map(comment => <Comment
        comment={comment.comment}
        author={comment.author}
        date={comment.date}
    />);
};

export default comments;