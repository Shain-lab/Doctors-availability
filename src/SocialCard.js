import './SocialCard.css';
import Location from './Location';
import PhoneNumber from './PhoneNumber';
const SocialCard = ({ userData })=>{
    return(
        <div className="card row">
            <div className="card_image"><img src={userData.picture.medium}/></div>
            <div className="card_title crdlft">{userData.name.first} {userData.name.last }</div>
            <div className="card_body">
                <Location location={userData.location}/>
                <PhoneNumber/>
            </div>
        </div>
    );
      
};

export default SocialCard;