import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="events-item">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} className={eventImageClassName} alt="event" />
        <p className="event-name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
