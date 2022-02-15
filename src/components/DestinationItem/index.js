import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {id, name, imgUrl} = eachDestination
  console.log(eachDestination)

  return (
    <li className="destination-item">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
