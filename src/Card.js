import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ src, title, description, price }) => {
    return (  
        <div className="card">
            <Link to='./search'>
                <img src={src} alt="" />
            </Link>
            <div className ="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    );
}
 
export default Card; 