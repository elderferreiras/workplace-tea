import React from 'react';
import Comment from '../Comments/Comment/Comment';

const comments = (props) => {
    let total = props.comments.length;
    return props.comments.map((comment, i) =>
        <Comment
            key={comment.id}
            comment={comment.content}
            author={comment.author}
            date={comment.createdAt}
            total={total}
            index={i}
        />
    );
};

export default comments;