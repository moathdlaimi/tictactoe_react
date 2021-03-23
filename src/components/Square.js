export const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

// Destructuring our props instead of passing props then do props.onClick, props.value...like below

/* <button className="square" onClick={props.onClick}>
      {props.value}
    </button> */
