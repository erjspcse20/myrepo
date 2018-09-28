import React, {Component} from 'react'
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: ''}
    }
    onInputChange(term){
        //const term = event.taget.value;
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render(){
        return(
            <div className="search-bar">
                <input
                    // type="text"
                    value={this.state.term}
                    //onChange={this.onInputChange} 
                    onChange={event=> this.onInputChange(event.target.value)}
                />
                
            </div>
            
        );
        
    } 
}

export default SearchBar;