import '../styles/content.css'
import Moto from '../assets/images/moto.png'
import Front from '../assets/images/front.png'
import Data from './data'
import Japan from '../assets/svg/オートバイ.svg'
// import Circle from './circle'

function content() {
    return (
        <div className='content'>

            <img className='MB-moto' src={Moto}></img>

            <img className='MB-moto-front' src={Front}></img>
            <div className='MB-japan-text'>
                <img src={Japan}></img>
                <img src={Japan}></img>
            </div>
            <Data />
            
        </div>
    );
}


export default content