import React from 'react'
import { Button as MuiButton } from "@material-ui/core";

import useStyles from './styles';

const Button = (props) => {

  const { text, size, color, variant, onClick, ...other } = props
  
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}>
      {text}
    </MuiButton>
  )
}

export default Button;