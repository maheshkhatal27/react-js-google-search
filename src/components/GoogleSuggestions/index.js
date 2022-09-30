import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  suggestionClickResult = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toUpperCase()
        .includes(searchInput.toUpperCase()),
    )
    return (
      <div className="google-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="main-suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="suggestion-container">
            {filteredList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestion={eachSuggestion.suggestion}
                suggestionClickResult={this.suggestionClickResult}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
