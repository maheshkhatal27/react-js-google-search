import './index.css'

const SuggestionItem = props => {
  const {key, suggestion, suggestionClickResult} = props

  const clickArrowSuggestion = () => {
    suggestionClickResult(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-sign"
        alt="arrow"
        onClick={clickArrowSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
