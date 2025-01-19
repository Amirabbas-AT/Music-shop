import './Credit.css';
import shadowTheHedgeHog from '../assets/images/paypal.png';

const Credit = () => {
    return (
        <div className="container text-center">
            <div className="shadow-creds">
                <img 
                    src={shadowTheHedgeHog} 
                    alt="shadow" 
                    className="shadow-creds-img" 
                />
                <a 
                    href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.paypal.com/&ved=2ahUKEwiC6sPwif2KAxUvUqQEHdwAEtsQFnoECAwQAQ&usg=AOvVaw00IEYNS3jAJAhu5zgfEDZu" 
                    className="shadow-creds-text"
                >
                    Ways to pay mony 

                    2053.2568.2567.5861
                </a>
            </div>
        </div>
    );
};

export default Credit;
