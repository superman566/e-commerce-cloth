import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import { userContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
// import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

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
          <CartIcon />
        </div>
        {/* <CartDropdown /> */}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
