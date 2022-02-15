import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const URL =
  'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    // console.log(searchInput)
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destionation-search-app">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="search"
          />
          <img src={URL} alt="search icon" className="search-icon" />
        </div>

        {/* <button type="submit">Search</button> */}
        <ul className="destination-list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              eachDestination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
