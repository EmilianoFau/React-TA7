import React from "react";
import Styles from './index.module.css'

const Button = ({ onClick }) => {
    return <button onClick={onClick}>Agregar Tarea</button>;
};

export default Button;