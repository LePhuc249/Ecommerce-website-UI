import { Link } from 'react-router-dom';
import classes from './NoProductFound.module.css';

const NoProductFound = (props) => {

  return (
    <div className={classes.noproduct}>
      <p>No product found!</p>
    </div>
  );
};

export default NoProductFound;