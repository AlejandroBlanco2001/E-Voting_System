import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    return (
      <nav id="main-nav">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
HOME            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="guide"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              GUIDE TO VOTE
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="two"
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
            >
              2FA
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="vote"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <em>VOTE</em>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar