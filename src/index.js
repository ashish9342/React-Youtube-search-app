import React, {
    Component
} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import {
    keys
} from './config/key'

import SearchBar from './components/search_bar';
import VideoList  from './components/video_list';
import VideoDetails from './components/video_details';





//creating a component
// const App = function(){
//     return <div>Hi!</div>
//     // jsx
// }

// Downward data flow
// parent component should be responsible for fetching data



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo:null
        };

        this.videoSearch('reactjs')


    }

    videoSearch(term){
        YTSearch({
            key: keys.youtube,
            term: term
        }, (videos) => {
            this.setState(
                //    {videos}
                {
                    videos: videos,
                    selectedVideo: videos[0]
                }
            );
        });
    }

    render() {
        const videoSearch =_.debounce((term)=>{this.videoSearch(term)}, 300)
        return ( <div>
            <SearchBar  onSearchTermChange={ term => this.videoSearch(term)}/>
            < VideoDetails video = {this.state.selectedVideo}/>
            < VideoList
            onVideoSelect={ selectedVideo =>this.setState({selectedVideo})} 
            videos ={this.state.videos}/>
            </div>
        );
    }

}

// const App = () => {
//     return (<div >
//         <SearchBar />        
//         </div>
//     );
//     // jsx
// }

// take this component generated HTML and put it on the page(DOM)
// React.render(App);
// ReactDOM.render(App) pass the instance of the app, instead of passing the whole app.
// target container is not a DOM element
// second argument, where to insert the app

ReactDOM.render( < App / > , document.querySelector('.container'))