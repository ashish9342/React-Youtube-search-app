import React from 'react';
import ReactDOM from 'react-dom';
//creating a component


// const App = function(){
//     return <div>Hi!</div>
//     // jsx
// }

const App =  () => {
    return <div> Hi! </div>;
    // jsx
}

// take this component generated HTML and put it on the page(DOM)
// React.render(App);
// ReactDOM.render(App) pass the instance of the app, instead of passing the whole app.
// target container is not a DOM element
// second argument, where to insert the app

ReactDOM.render(<App/>, document.querySelector('.container'))
