import './Profession.css'
const Profession = ({location}) => {
    return(
        <div className="location">
            <p>{location.street.number} years experience</p>
            <p>{location.city}</p>
            <p>{location.country}<span className="price">₹500</span></p>
        </div>
    );
};

export default Profession;