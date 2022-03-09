import { Link } from "react-router-dom";

const Header = () => {
  const logoSize = { fontSize: "1.5rem" };
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-award-fill" style={logoSize}></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experts">
                  Experts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ask-query">
                  Ask Query
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link className="btn btn-primary me-4 px-4" to="/login">
                Login
              </Link>
              <Link className="btn btn-warning px-4" to="/signup">
                Sign up
              </Link>
              {/* <Link className="nav-link text-white" to={`/profile/${username}`}>
                <i className="bi bi-person-circle " style={logoSize}></i>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
