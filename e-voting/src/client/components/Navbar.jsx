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
              Home
            </Link>
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
              Guide to vote
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
              Two factors authentication
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
              About us
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
              Vote
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar