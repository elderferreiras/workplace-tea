import React, {Component} from 'react';
import TeaForm from '../../components/Theme/TeaForm/TeaForm';
import Teas from '../Teas/Teas';
import Layout from '../../hoc/Layout';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import {listTeas} from '../../graphql/queries';
import Spinner from '../../components/Theme/Spinner/Spinner';

class App extends Component {
    state = {
        tea: {
            content: ""
        },
        items: null,
        nextToken: null
    };

    componentDidMount() {
        this.listTeas();
    }

    teaSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.tea.content.length) {
            API.graphql(graphqlOperation(mutations.createTea, {input: {content: this.state.tea.content}})).then(res => {
                this.listTeas();
            }).finally(res => {
                this.setState({tea: {content: ""}});
            });
        }
    };

    teaChangeHandler = (event) => {
        this.setState({tea: {content: event.target.value}});
    };

    listTeas = () => {
        let variables = {limit: 10};

        if (this.state.nextToken) {
            variables.nextToken = this.state.nextToken;
        }

        API.graphql(graphqlOperation(listTeas, variables)).then(res => {
            if(res.data.listTeas.items.length) {
                this.setState({items: res.data.listTeas.items, nextToken: res.data.listTeas.nextToken})
            }
        });
    };

    upHandler = (id, action, downAction) => {
        const up = this.getValue('up', id, action);
        const down = this.getValue('down', id, downAction);

        API.graphql(graphqlOperation(mutations.updateTea, {input: {id: id, up: up, down: down}})).then(res => {
            this.handleVotingResponse(res);
        });
    };

    downHandler = (id, action, upAction) => {
        const down = this.getValue('down', id, action);
        const up = this.getValue('up', id, upAction);

        API.graphql(graphqlOperation(mutations.updateTea, {input: {id: id, up: up, down: down}})).then(res => {
            this.handleVotingResponse(res);
        });
    };

    handleVotingResponse = (res) => {
        const currentTea = [...this.state.items];

        const teaIndex = currentTea.findIndex(tea => tea.id === res.data.updateTea.id);

        currentTea[0] = {...currentTea[teaIndex], up: res.data.updateTea.up, down: res.data.updateTea.down};

        this.setState({items: currentTea});
    };

    nextHandler = () => {
        this.listTeas();
    };

    getValue = (dir, id, action) => {
        let value = parseFloat(document.querySelector("[data-id='" + id + "'][data-thumbs=" + dir + "]").dataset.value);

        if (action === 'SUBTRACT') {
            value -= 1;
        } else if (action === 'ADD') {
            value += 1;
        }

        return value;
    };

    render() {
        return (
            <Layout>
                <TeaForm submit={this.teaSubmitHandler} tea={this.state.tea} changed={this.teaChangeHandler}/>
                {this.state.items ? <Teas
                    items={this.state.items}
                    upHandler={this.upHandler}
                    downHandler={this.downHandler}
                    next={this.nextHandler}
                    hasNext={!!this.state.nextToken}
                /> : <Spinner/>}
            </Layout>
        );
    }
}

export default App;