import React from 'react';
import './Products.css';

const Products = (props) => {
    const { name, review, rating, img } = props.product;
    return (

        <div className="customer-review my-3">
            <div className='review-detail'>
                <img src={img} alt="" />
                <h4 className='mt-3'>Name: {name}</h4>
                <p><small className='review'>Review:</small> {review}</p>
            </div>
            <button className='btn-cart review'>Raiting: <small>{rating}</small></button>
        </div>

    );
};

export default Products;

