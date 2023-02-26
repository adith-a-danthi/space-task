import './Navbar.css';

const navLinks = [
  { title: 'Home' },
  { title: 'Templates' },
  { title: 'Price' },
  { title: 'Help' },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <div className="nav__logo">Space</div>
        <div className="nav__links">
          {navLinks.map((link, index) => {
            return (
              <div className="nav__link" key={index} href="#">
                {link.title}
              </div>
            );
          })}
          <button className="nav__button">Get In Touch</button>
        </div>
      </div>
    </nav>
  );
}
