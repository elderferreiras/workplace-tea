import React, {Component} from 'react';
import TeaForm from '../../components/Theme/TeaForm/TeaForm';
import Teas from '../../components/Teas/Teas';
import Layout from '../../hoc/Layout';
import Spinner from '../../components/Theme/Spinner/Spinner';
import debounce from 'lodash.debounce';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import {validate} from "../../utility/utility";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tea: {
                content: "",
                count: 0,
                valid: false
            }
        };

        window.onscroll = debounce(this.loadTeas, 100);
    }

    componentDidMount() {
        this.props.isIPBlocked();

        if(!this.props.hasEverything && !this.props.next) {
            this.props.fetchTeas();
        }
    }

    loadTeas = () => {
        if (this.props.loading || this.props.starting || this.props.next === null) return;

        const height = window.innerHeight + window.pageYOffset;

        if ((height) >= document.body.offsetHeight - 200) {
            if (this.props.next !== this.props.previous) {
               this.props.fetchTeas();
            }
        }
    };

    teaSubmitHandler = (event) => {
        event.preventDefault();

        if (this.state.tea.content.length) {
            if (this.isTeaValid(this.state.tea.content)) {
                axios.get('https://api.ipify.org/?format=json').then(res => {
                    if(res.data.ip.length) {
                        this.props.saveTea(this.state.tea.content, res.data.ip);
                    } else {
                        this.loadFakeTea();
                    }
                }).finally(res => {
                    this.setState({
                        tea: {
                            content: "", count: 0, valid: false
                        }
                    });
                }).catch(err => {
                    this.props.saveTea(this.state.tea.content);
                });
            } else {
                this.loadFakeTea();
            }
        }
    };

    loadFakeTea = () => {
        this.props.loadInappropriateTea(this.state.tea.content);
        this.setState({
            tea: {
                content: "", count: 0, valid: false
            }
        });
    };

    isTeaValid = (content) => {
        return validate(content, {
            minLength: 0,
            maxLength: 250,
            profanity: true,
            whiteSpace: true,
            singleWord: true,
            consecutive: true,
            specialCharacters: true,
            teas: this.props.teas
        });
    };

    teaChangeHandler = (event) => {
        let tea = {...this.state.tea};

        tea.valid =  event.target.value.length >= 0 && event.target.value.length <= 250;
        tea.content = event.target.value;
        tea.count = event.target.value.length;

        this.setState({
            tea: tea
        });
    };

    render() {
        let teas = <Spinner/>;

        if(this.props.teas && !this.props.starting) {
            teas = <Teas teas={this.props.teas}
                         loading={this.props.loading}
                         hasEverything={this.props.hasEverything} />;
        }

       if(this.props.blocked) {
           return <p>Sorry, mate. You've been banned.</p>;
       } else {
           return  <Layout>
                       <TeaForm
                           tea={this.state.tea}
                           onSubmit={this.teaSubmitHandler}
                           onChange={this.teaChangeHandler}/>
                       {teas}
                </Layout>
       }
    }
}

const mapStateToProps = state => {
  return {
      teas: state.teasReducer.teas,
      starting: state.teasReducer.starting,
      next: state.teasReducer.next,
      previous: state.teasReducer.previous,
      loading: state.teasReducer.loading,
      hasEverything: state.teasReducer.hasEverything,
      blocked: state.teasReducer.blocked
  }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeas: (init) => dispatch(actions.fetchTeas(init)),
        saveTea: (content, ip) => dispatch(actions.submitTea(content, ip)),
        isIPBlocked: () => dispatch(actions.isIPBlocked()),
        blockIP: (ip) => dispatch(actions.blockIP(ip)),
        loadInappropriateTea: (content) => dispatch(actions.loadInappropriateTea(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
