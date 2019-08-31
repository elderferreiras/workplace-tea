import React, {Fragment} from 'react';

const footer = () => {
    return (
        <Fragment>
            <hr/>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p className="copyright text-muted">Copyright &copy; Workplace Tea 2019</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default footer;