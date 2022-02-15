import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

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
      eachDestination.name.includes(searchInput),
    )

    return (
      <div className="destionation-search-app">
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
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
