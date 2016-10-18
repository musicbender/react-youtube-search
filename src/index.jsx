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
            videos: [],
            selectedVideo: null
        };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));