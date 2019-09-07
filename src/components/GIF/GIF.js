import React from 'react';
import {Carousel} from 'react-bootstrap';
import './GIF.scss';

const gif = (props) => {
    const gifs = props.gifs.map(gif =>
        <Carousel.Item  key={gif.id}>
            <img
                src={gif.images.original.url}
                className="d-block w-100"
                alt={gif.title}
                height="200"
            />
            <Carousel.Caption>
                <button type="button" className="btn btn-primary" onClick={(e) => props.selected(gif.images.original.url, e)}><i className="fas fa-check"/></button>
            </Carousel.Caption>
        </Carousel.Item>);

    return (
        <Carousel className="GIF" indicators={false}>
            {gifs}
        </Carousel>
    );
};

export default gif;