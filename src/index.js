import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './componenets/serach_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './componenets/video_list';
import VideoDetail from './componenets/video_detail';

const API_KEY = "AIzaSyBL7zIdzkOLzEzGO8cCK2c1pQDpXgekhes";


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos:[],
			selecteVideo: null
		};

		YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]

			});
		});

	}

	render() {
		return (
			<div> 
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				 videos = {this.state.videos} />
			</div>
		);
	}
	
}


// take this component's generated html and put it on the page (in the dom)
 ReactDOM.render(<App />, document.querySelector('.container'));

