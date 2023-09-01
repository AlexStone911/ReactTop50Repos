import {Component} from "react";
import {fetchPopularRepos} from "./api/fetchPopularRepos";
import RepoGrid from "./RepoGrid";
import SelectedLanguage from "./SelectedLanguage";

class App extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    getRepos(name) {
        fetchPopularRepos(name)
            .then(data => this.setState({ repos: data }));
    }

    componentDidMount() {
        this.getRepos(this.state.selectedLanguage);
    }

    selectLanguage = (event) => {
        if((event.target.innerText !== this.state.selectedLanguage) && (this.state.repos)) {
          this.setState({ repos: null });
          this.getRepos(event.target.innerText);
          this.setState({selectedLanguage: event.target.innerText});
        }
    }  

    render() {
        const {selectedLanguage, repos} = this.state;

        return (
            <>
                <SelectedLanguage 
                  selectedLanguage={selectedLanguage} 
                  selectOne={this.selectLanguage}
                />
                {this.state.repos ?
                    <RepoGrid repos={repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default App;