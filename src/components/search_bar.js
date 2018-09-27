import React, {
  Component
} from 'react';

// functional component
// const SearchBar = () =>{
//   return <input/>;
// }


// class component
// adding more functionality
// class SearchBar extends React.Component {
class SearchBar extends Component {




  constructor(props) {
    super(props);
    // calling parent method

    this.state = {
      term: ''
    }
    //  State 
    // Plain js object to react to user events
    // exists in class component
    // 
  }


  //must have in inside class component
  render() {
    // return <input onChange={this.onInputChange}/> ;
    // es6 function
    // return <input onChange = {
    //   (event) => console.log(event.target.value)
    // }

    // setting up state
    return (
      <div className="search-bar">
    
    <input 
    value ={this.state.term}
    onChange = {
      (event) => this.setState({
        term: event.target.value
      })
    }
    /> 
    
    
    </div>
    );

  }
  // controlled form input
// Value of input : {this.state.term}
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

}

export default SearchBar;