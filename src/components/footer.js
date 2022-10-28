import '../styles/footer.css'
import Line from '../assets/svg/Line.svg'
import rightLine from '../assets/svg/rightLine.svg'
import bckMoto from '../assets/images/bckMoto.png'

function footer() {
    return (
        <div>
            <div className="footer">
                <div className="footerinfo">
                    <div>
                        <div className='left'>
                            <p>&lt;</p>
                            <p className='number'>2</p>
                            <img src={Line} />
                            <img src={rightLine}/>
                            <p className='number'>10</p>  
                            <p>&gt;</p>
                        </div>
                    </div>
 
                    <div className='center'>
                        The bike comes in all black, with a relatively modern appeal. Chrome accents in just the right 
                        places make the bike stand out, while the black-on-black satin text on the bike’s fork-guards helps 
                        highlight the company’s branding without being too direct or obvious.
                    </div>

                    <img src={bckMoto} alt="" />
                </div>
            </div>
        </div>
    );
}

export default footer