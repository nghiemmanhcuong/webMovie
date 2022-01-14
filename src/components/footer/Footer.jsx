import './footer.scss'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' style={{backgroundImage: `url(${bg})`}}>
            <div className='footer-content container'>
                <div className='footer-content-logo'>
                    <div className='logo'>
                        <img src={logo} alt='logo image' />
                        <Link to='/'>tMovies</Link>
                    </div>
                </div>
                <div className='footer-content-menus'>
                    <div className='footer-content-menu'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Team of Servives</Link>
                        <Link to='/'>About Us</Link>
                    </div>
                    <div className='footer-content-menu'>
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQ Us</Link>
                        <Link to='/'>Premium</Link>
                        <Link to='/'>Pravacy policy</Link>
                    </div>
                    <div className='footer-content-menu'>
                        <Link to='/'>You Must Watch</Link>
                        <Link to='/'>Recent Release</Link>
                        <Link to='/'>Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
