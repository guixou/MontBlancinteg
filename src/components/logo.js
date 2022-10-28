import '../styles/logo.css'
import M from '../assets/svg/path9M.svg'
import O from '../assets/svg/path7O.svg'
import N from '../assets/svg/path11N.svg'
import T from '../assets/svg/path13T.svg'
import B from '../assets/svg/path21B.svg'
import L from '../assets/svg/path17L.svg'
import A from '../assets/svg/path19A.svg'
import C from '../assets/svg/path15C.svg'
import star from '../assets/svg/Vectorlogo.svg'


function Logo() {
    if(window.screen.width > 1000) {
        return (<div className="MB-logo"> 
                <div className='MB-logo-letter'>         
                    <img className='first-letter' src={M}></img>
                    <img src={O}></img>
                    <img src={N}></img>
                    <img src={T}></img>
                    <img src={B}></img>
                    <img src={L}></img>
                    <img src={A}></img>
                    <img src={N}></img>
                    <img src={C}></img>
                </div>
                <img src={star}></img>

            </div>
        );
    }
}


export default Logo
