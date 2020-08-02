import React from 'react';
import Item from "../Items/Item/Item";

const items = (props) => {
    return props.items.map(item => <Item
        id={item.id}
        key={item.id}
        content={item.content}
        createdAt={item.createdAt}
        up={item.up}
        down={item.down}
        comments={item.comments.items}
    />);
};

export default items;
