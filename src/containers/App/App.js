import React, {Component} from 'react';
import TeaForm from '../../components/Theme/TeaForm/TeaForm';
import Teas from '../Teas/Teas';
import Layout from '../../hoc/Layout';
import Spinner from '../../components/Theme/Spinner/Spinner';
import debounce from 'lodash.debounce';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class App extends Component {
    state = {
        tea: {
            content: "",
            count: 0,
        }
    };

    constructor(props) {
        super(props);

        window.onscroll = debounce(this.loadTeas, 100);
    }

    componentDidMount() {
        this.props.fetchTeas();
    }

    loadTeas = () => {
        if (this.props.starting || !this.props.next) return;

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
            this.setState({
                tea: {
                    content: "", count: 0
                }
            });
            this.props.saveTea(this.state.tea.content);
        }
    };

    teaChangeHandler = (event) => {
        this.setState({
            tea: {
                content: event.target.value,
                count: event.target.value.length
            }
        });
    };

    render() {
        let teas = <Spinner/>;

        if(this.props.teas && !this.props.starting) {
            teas = <Teas teas={this.props.teas}
                         loading={this.props.loading}
                         hasEverything={this.props.hasEverything} />;
        }

        return (
            <Layout>
                <TeaForm
                    tea={this.state.tea}
                    onSubmit={this.teaSubmitHandler}
                    onChange={this.teaChangeHandler}/>
                {teas}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
  return {
      teas: state.teasReducer.teas,
      starting: state.teasReducer.starting,
      next: state.teasReducer.next,
      previous: state.teasReducer.previous,
      loading: state.teasReducer.loading,
      hasEverything: state.teasReducer.hasEverything
  }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeas: () => dispatch(actions.fetchTeas()),
        saveTea: (content) => dispatch(actions.submitTea(content))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);