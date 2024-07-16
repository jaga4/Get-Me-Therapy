import { Link, useNavigate } from 'react-router-dom';
import './success.css';
import src from 'C:/Users/JAGADEESH/OneDrive/Desktop/tasks/GetMeTherapy/analogclock/src/images/pixelcut-export.png'
const Success=()=>{
    const navigate = useNavigate();
    function handleTracking(){
        navigate("/clockScreen");

    }
    return(
        <div className="success-container">
            <div className="success-form">
            <div className='top-bar'></div>
            <div className='Illustration'>
                <img className='success-logo' src={src} alt='logo'/>
            </div>
            <div className='title'>
                <h5 className='content'>Login Successful</h5>
            </div>
            <button type="submit" className="goto-in-btn" onClick={handleTracking}>
            Go to Tracking Screen
          </button>
          <div className='logout'>
            <Link to={"/login"} className="logout-text" >Logout</Link>
          </div>
          <div className='end-line-succ'></div>
            </div>
            
        </div>

    )
}
export default Success;