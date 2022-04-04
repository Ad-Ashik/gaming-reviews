import { useEffect, useState } from 'react';

const useRivews = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'gaming-review-api.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];
};

export default useRivews;