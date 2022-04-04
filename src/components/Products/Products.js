import React from 'react';
import './Products.css';

const Products = (props) => {
    const { name, review, rating, img } = props.product;
    return (
        <div className='customer-review-container'>
            <div className="customer-review">
                <div className='review-img'>
                    <img src={img} alt="" />
                </div>
                <div className='review-detail'>
                    <p>Name: {name}</p>
                    <p>Review: {review}</p>
                    <p>Raiting: <small>{rating}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Products;

