import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import {
    keys
} from './config/key'

import SearchBar from './components/search_bar';
import VideoList  from './components/video_list';




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
            videos: []
        };

        YTSearch({
            key: keys.youtube,
            term: 'reactjs'
        },  (videos) =>{
           this.setState({videos});
        });
    }

    render() {
        return ( <div>
            <SearchBar />
            < VideoList videos ={this.state.videos}/>
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