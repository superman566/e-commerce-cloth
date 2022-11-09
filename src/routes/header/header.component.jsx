import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Logo } from "../../logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import { userContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { cartContext } from "../../contexts/cart.context";

import "./header.styles.scss";


const Header = ()=>{
  const { currUser } = useContext(userContext);
  const { isCartOpen } = useContext(cartContext);
  console.log('Current login in User is:', currUser);
 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" style={{width: "50px", height: "50px"}} />
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
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
