import React from 'react';
import Items from "../../components/Items/Items";
import Pagination from "../../components/Theme/Pagination/Pagination";

const Teas = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {props.items.length ?
                        <Items
                            items={props.items}
                            upHandler={props.upHandler}
                            downHandler={props.downHandler}
                        /> : <p>No tea has been spilled yet. Want to be the first to spill it?</p>}
                    {props.hasNext ? <Pagination next={props.next}/> : null}
                </div>
            </div>
        </div>
    );
};

export default Teas;