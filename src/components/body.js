import Banner from './banner'
import Content from './content'
import Footer from './footer'
import '../styles/Body.css'
import './logo.js'
import Star from '../assets/svg/Vectorlogo.svg'

function content() {
  return (
    <div className='bck-Body'>
        <img className='Body-star' src={Star}></img>
        <div className='Body'>
            <header>
                <Banner />
            </header>
            <body>
                <Content />
            </body>
            <footer>
              <Footer />
            </footer>
        </div>
    </div>
  );
}

export default content;
