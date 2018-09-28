import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBhfGdyQDZ0FB8UbeLbb9NYDqAhHPRGtWo';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       videos:[],
       selectedVideo: null
       };
    this.videoSearch('surfboard');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
         });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
          <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
               onVideoSelect={selectedVideo => this.setState({selectedVideo})}
               videos={this.state.videos} 
            />
          </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
//install youtube search api npm install --save youtube-api-search

//npm install --save lodash
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
