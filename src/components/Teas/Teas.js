import React from 'react';
import Items from '../../components/Items/Items';
import Loading from '../../components/Theme/LoadingTeas/LoadingTeas';
import NoMoreTea from '../../components/Theme/NoMoreTea/NoMoreTea';

const teas = (props) => {
    const loading = props.loading ? <Loading/> : null;
    const hasEverything = props.hasEverything ? <NoMoreTea/> : null;

    let teas = <p>No tea has been spilled yet. Want to be the first to spill it?</p>;

    if (props.teas.length) {
        teas = <Items items={props.teas}/>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {teas}
                    {loading}
                    {hasEverything}
                </div>
            </div>
        </div>
    );
};

export default teas;