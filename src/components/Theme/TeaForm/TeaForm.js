import React from 'react';
import Form from '../Form/Form';
import Background from '../../../assets/images/tea-about.jpg';
import Header from '../../../hoc/Header';

const teaForm = (props) => {
    return (
        <Header backgroundImage={Background} page="site">
            <Form/>
        </Header>
    );
};

export default teaForm;