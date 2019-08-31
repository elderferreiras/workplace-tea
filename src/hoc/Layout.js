import React, { Fragment } from 'react';
import Nav from "../components/Theme/Nav/Nav";
import Footer from "../components/Theme/Footer/Footer";

const layout = (props) => {
    return (
        <Fragment>
            <Nav/>
                {props.children}
            <Footer/>
        </Fragment>
    );
};

export default layout;