import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ()=>{
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop' > Shop</Link>
          <Link className="nav-link" to='/auth' > SIGN IN</Link>
        </div>
        
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;