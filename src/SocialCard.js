import './SocialCard.css';
import Profession from './Profession';
import Available from './Availalble';
const SocialCard = ({ userData })=>{
    return(
        <div className="card row">
            <div className="card_image"><img src={userData.picture.medium}/></div>
            <div className="card_title crdlft">{userData.name.title} {userData.name.first} {userData.name.last }</div>
            <div className="card_body">
                <Profession location={userData.location}/>
                <Available/>
            </div>
        </div>
    );
      
};

export default SocialCard;