import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'gaming-review.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Review Item...({reviews.length})</h2>
            <div className='customer-review-container'>
                {
                    reviews.map(item => <Review
                        key={item.id}
                        item={item}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;