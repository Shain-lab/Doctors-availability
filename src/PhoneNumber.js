import './PhoneNumber.css'
const PhoneNumber = ({number, type}) => (
    <div className="phone">
        <p>{type}: {number}</p>
    </div>
);

export default PhoneNumber;