import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from './vendor/jquery-ajax';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './components/header.jsx';
import SearchBar from './components/search-bar.jsx';
import VideoList from './components/video-list.jsx';
import VideoDetail from './components/video-detail.jsx';


const API_KEY = 'AIzaSyD0tW8Wi1eMDsk6WxqA-EO1_5MtbwyS0pc';

injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
            word: null
        };

        this.videoSearch('marimba');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    getWord(word) {
        console.log(word);
        this.videoSearch(word);
    }
    
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <MuiThemeProvider>
                <div>
                    <Header getWord={this.getWord} />
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                        videos={this.state.videos} 
                        />
                </div>
            </MuiThemeProvider>
        )
    }
} 

ReactDOM.render(<App />, document.querySelector('.container'));