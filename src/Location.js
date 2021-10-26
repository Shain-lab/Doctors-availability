import './Location.css'
const Location = ({location}) => {
    return(
        <div className="location">
            <p>{location.street.number},{location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.postcode}</p>
            <p>{location.country}<span className="price">$500</span></p>
        </div>
    );
};

export default Location;