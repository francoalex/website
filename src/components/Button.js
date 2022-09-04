import '../styles/Button.css'
// import picture from '../assets/pic.png'
import resume from '../assets/resume.pdf'
import { Link } from 'react-router-dom';

function Button (props) {
    console.log("==props: ", props)
    if(props.isDownloadButton) {
        return (
            <div>
                <a href={resume} download="alex_franco_resume.pdf"> 
                    <button> {props.title} </button>
                </a>
            </div>
        );
    }
    
    if(props.isContactButton) {
        return (
            <div>
                <Link to='/about'>
                    <button> {props.title} </button>
                </Link>
            </div>
        );
    }
    
}

export default Button;