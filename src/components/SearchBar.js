import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); 

    // call callback from parent component
    this.props.onSubmit(this.state.term);
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" method="submit" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search </label> <br />
            <input
              type="text"
              placeholder="Search videos..."
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;