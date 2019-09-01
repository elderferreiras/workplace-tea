import React from 'react';
import Items from "../../components/Items/Items";
import Pagination from "../../components/Theme/Pagination/Pagination";

const Teas = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <Items
                        items={props.items}
                        upHandler={props.upHandler}
                        downHandler={props.downHandler}
                    />
                    {props.hasNext? <Pagination next={props.next}/> : null}
                </div>
            </div>
        </div>
    );
};

export default Teas;