import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import { userContext } from "../../contexts/user.context";
import "./header.styles.scss";

const Header = ()=>{
  const { currUser } = useContext(userContext);
  console.log('Current login in User is:', currUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop' > Shop</Link>
          { currUser ? 
          (
          <span 
            className="nav-link" 
            onClick={signOutUser}>
              SIGN OUT
          </span>)
          : 
          (<Link className="nav-link" to='/auth' > SIGN IN</Link>)
          }
        </div>
        
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;