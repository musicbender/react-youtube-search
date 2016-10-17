import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.jsx';
import VideoList from './components/video-list.jsx';
import VideoDetail from './components/video-detail.jsx';

const API_KEY = 'AIzaSyD0tW8Wi1eMDsk6WxqA-EO1_5MtbwyS0pc';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [] 
        };
        
        YTSearch({key: API_KEY, term: 'surfboards'},(videos) => {
            this.setState({ videos });
            //for ES6...when key and value is same (videos), you can just put it in once
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));