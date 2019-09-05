import React, {Component} from 'react';
import TeaForm from '../../components/Theme/TeaForm/TeaForm';
import Teas from '../Teas/Teas';
import Layout from '../../hoc/Layout';
import Spinner from '../../components/Theme/Spinner/Spinner';
import debounce from 'lodash.debounce';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
    state = {
        tea: {
            content: "",
            count: 0,
            valid: false
        }
    };

    constructor(props) {
        super(props);

        window.onscroll = debounce(this.loadTeas, 100);
    }

    componentDidMount() {
        this.props.isIPBlocked();

        if(!this.props.hasEverything) {
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
            axios.get('https://api.ipify.org/?format=json').then(res => {
                const ip = res.data.ip;

                if (this.isTeaValid(this.state.tea.content)) {
                    this.props.saveTea(this.state.tea.content, res.data.ip);
                } else {
                    this.props.blockIP(ip);
                }
            }).finally(res => {
                this.setState({
                    tea: {
                        content: "", count: 0, valid: false
                    }
                });
            });
        }
    };

    isTeaValid = (content) => {
        if(content.length < 20 || content.length > 250) {
            return false;
        }

        if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(content)) {
            return false;
        }

        let Filter = require('bad-words'),
            filter = new Filter();

        if(filter.isProfane(content)) {
            return false;
        }

        if (this.props.teas.findIndex(tea => content === tea.content) !== -1) {
            return false;
        }

        return true;
    };

    teaChangeHandler = (event) => {
        let tea = {...this.state.tea};

        tea.valid = this.isTeaValid(event.target.value);
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
        blockIP: (ip) => dispatch(actions.blockIP(ip))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);