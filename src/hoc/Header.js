import React from 'react';

const header = (props) => {
    return (
        <header className="masthead" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div className="overlay"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className={props.page + "-heading"}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default header;