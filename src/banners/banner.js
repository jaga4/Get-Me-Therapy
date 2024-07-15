import { useEffect,  useState } from 'react';
import './banner.css';
import { Link, useNavigate } from "react-router-dom";
const Banner=(props)=>{
    const[state,setState]=useState(props.sliders);
    const [animateProgress, setAnimateProgress] = useState(false);
    const [moveRight, setMoveRight] = useState(false);
  
    const slider=["s1","s2","s3"];
    const navigate = useNavigate();
  
    useEffect(() => {
        if (props.path === "next1" ) { 
          setAnimateProgress(true); 
          setMoveRight(true);
        
        }
    }, [props.path]);

    useEffect(() => {
        setState(props.sliders);
    }, [props.sliders]);

    useEffect(() => {
        setAnimateProgress(true);
        setMoveRight(true);
    }, []);

    function handleSliders() {
        let nextSlider;
        if (state === "sd1") nextSlider = "sd2";
        else if (state === "sd2") nextSlider = "sd3";
        else nextSlider = "sd1";
        
        setState(nextSlider);
        navigate(`/${props.path}`);
    }
    return(
        <div className={`page-container ${props.img}`} >
         <div className="banner-container">
            <div className="content">
         <h4>We serve incomparable delicacies</h4>
         <p>All the best restaurants with their top menu waiting for you, they cant’t wait for your order!!</p>
         <div className="slider">
            {
                slider.map((e,i)=>(
                    <div key={i} className={`${e} ${state === `sd${i+1}` ? 'active' : ''}`}></div>
                ))
            }
         </div>
         {props.nav &&(
            <div className="navs">
            <Link to={"/login"} className='skip'>Skip</Link>
            <Link to={`/${props.path}`} className='next' onClick={handleSliders}>Next &nbsp;<i className="bi bi-arrow-right"></i> </Link>
            </div>
         )}

         {props.progressBtn &&(
            <Link to={"/login"}>
           <div className={`progress-button ${moveRight ? 'move-right' : ''}`}>
            <div className={`ellipse-191 ${animateProgress ? 'animate' : ''}`}>
            <svg>
             <circle cx="47" cy="47" r="45"></circle>
            </svg>
            </div>
           <div className="ellipse-190"></div>
           <div className="button">
               <div className="arrow-right">
                   <div className="icon">
                       <div className="arrow-right-icon"><i className="bi bi-arrow-right"></i></div>
                   </div>
               </div>
           
       </div>
       </div>
       </Link>
         )}
         </div>
        <div className='end-line'></div>
         </div>
        </div>
    )
}
export default Banner;