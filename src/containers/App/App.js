import React, { Component } from 'react';
import TeaForm from "../../components/Theme/TeaForm/TeaForm";
import Teas from "../Teas/Teas";
import Layout from '../../hoc/Layout';

class App extends Component {
    state = {
        items: [
            {
                content: "Ugh what a terrible day.",
                date: "2019-08-29T00:54:59.568Z",
                up: 3,
                down: 6
            },
            {
                content: "Ugh what a terrible week.",
                date: "2019-08-29T00:54:59.568Z",
                up: 4,
                down: 0
            },
            {
                content: "Ugh what a terrible month.",
                date: "2019-08-29T00:54:59.568Z",
                up: 1,
                down: 0
            },
        ]
    };

    render() {
        return (
            <Layout>
                <TeaForm/>
                <Teas items={this.state.items}/>
            </Layout>
        );
    }
}

export default App;