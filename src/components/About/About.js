import React from 'react';
import Layout from '../../hoc/Layout';
import Header from "../../hoc/Header";
import TeaBackground from "../../assets/images/contact-tea.png";

const about = () => {
    return (
        <Layout>
            <Header backgroundImage={TeaBackground} page="page">
                <h1>About</h1>
                <span className="subheading">What's the tea, hunty?</span>
            </Header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <h2>tea <span className="font-italic font-weight-light form-control-sm">definition</span></h2>
                        <p>the best kind of gossip, typically shared between friends. it’s a bonding tool for people of all ages. tea is usually about someone you know, but can also extend to celebrities random internet scandals, etc.</p>
                        <p className="font-italic">ugh I’ve missed so much what’s the tea sis?</p>
                        <p className="font-italic">I heard some tea about Saturday night!</p>
                        <p className="font-italic">what’s the tea with them are they a couple?</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default about;