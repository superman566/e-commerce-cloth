import "./button.styles.scss";

let BUTTON_TYPES = new Map();
BUTTON_TYPES.set('google', 'google-sign-in');
BUTTON_TYPES.set('inverted', 'inverted');

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button 
      className={`button-container ${BUTTON_TYPES.get(buttonType)}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button; 
