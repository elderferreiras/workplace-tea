import React from 'react';
import Item from "../Items/Item/Item";

const items = (props) => {
    return props.items.map(item => <Item
        content={item.content}
        date={item.date}
        up={item.up}
        down={item.down}
    />);
};

export default items;