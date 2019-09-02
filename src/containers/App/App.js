import React, {Component} from 'react';
import TeaForm from '../../components/Theme/TeaForm/TeaForm';
import Teas from '../Teas/Teas';
import Layout from '../../hoc/Layout';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import {getWorkplace} from '../../graphql/queries';
import Spinner from '../../components/Theme/Spinner/Spinner';
import {getWorkplaceId} from "../../helpers/utils";
import debounce from "lodash.debounce";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tea: {
                content: "",
                count: 0,
            },
            items: [],
            nextToken: null,
            previousToken: null,
            isLoading: false,
            noMore: false,
            initialLoading: false
        };

        window.onscroll = debounce(this.lazyLoad, 100);
    }

    lazyLoad = () => {

        if (this.state.isLoading || !this.state.nextToken) {
            return;
        }

        if (
            (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 200
        ) {
            if (this.state.nextToken !== this.state.previousToken) {
                this.setState({isLoading: true});
                this.listTeas();
            }
        }
    };

    componentDidMount() {
        this.setState({initialLoading: true});
        this.listTeas();
    }

    teaSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.tea.content.length) {
            this.setState({
                tea: {content: "", count: 0},
                nextToken: null,
                previousToken: null,
                noMore: false,
                isLoading: false
            });

            API.graphql(graphqlOperation(mutations.createTea, {
                input: {
                    content: this.state.tea.content,
                    teaWorkplaceId: getWorkplaceId()
                }
            })).finally(res => {
                this.listTeas(true);
            });
        }
    };

    teaChangeHandler = (event) => {
        this.setState({tea: {content: event.target.value, count: event.target.value.length}});
    };

    listTeas = (refresh) => {
        let variables = {id: getWorkplaceId(), sortDirection: 'DESC', limit: 10};

        if (refresh === undefined && this.state.nextToken) {
            variables.nextToken = this.state.nextToken;
        }

        API.graphql(graphqlOperation(getWorkplace, variables)).then(res => {
            const currentTeas = this.state.items;
            const teas = res.data.getWorkplace.teas;
            const previousToken = refresh === undefined ? this.state.nextToken : null;

            if (teas.items.length) {
                const newItems = refresh === undefined ? currentTeas.concat(teas.items) : teas.items;

                this.setState({
                    items: newItems
                });
            } else {
                const newItems = refresh === undefined ? currentTeas : teas.items;

                this.setState({
                    items: newItems
                });
            }


            this.setState({
                isLoading: false,
                initialLoading: false,
                nextToken: teas.nextToken,
                previousToken: previousToken
            });

            if (refresh === undefined && previousToken && !res.data.getWorkplace.teas.nextToken) {
                this.setState({noMore: true});
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

        currentTea[teaIndex] = {...currentTea[teaIndex], up: res.data.updateTea.up, down: res.data.updateTea.down};

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
                {this.state.items && !this.state.initialLoading ? <Teas
                    items={this.state.items}
                    upHandler={this.upHandler}
                    downHandler={this.downHandler}
                    next={this.nextHandler}
                    isLoading={this.state.isLoading}
                    noMore={this.state.noMore}
                /> : <Spinner/>}
            </Layout>
        );
    }
}

export default App;