import React, {Component} from 'react';
import Items from "../../components/Items/Items";
import Pagination from "../../components/Theme/Pagination/Pagination";

class Teas extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Items items={this.props.items}/>
                        <Pagination/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teas;