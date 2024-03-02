import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">AR</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://i.ibb.co/VTXj4VJ/linkedin.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://i.ibb.co/GpfLc7f/github.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://i.ibb.co/56s1nzn/twitter.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header