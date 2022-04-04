import React from 'react';
import { Link } from 'react-router-dom';
import useRivews from '../../hooks/useRivews';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useRivews();
    return (
        <div className='container'>
            <div className="gaming-container">
                <div className='gaming-chair mt-5'>
                    <h1 className='fw-bolder'><small>MeeTion MT-CHR05 Cheap Mesh</small></h1>
                    <h1 className='text-primary fw-bolder'><small>Gaming Chair Orange E-Sport Office </small></h1>
                    <p className='mt-4'>The MeeTion MT-CHR05 features a wavy design of the backrest that enhances the backrest bearing capacity. The ergonomic design is designed to fit tightly around the waist for a long office comfort experience. Net cloth breathability and antibacterial are perfectly combined with leather chair clothing to enhance comfort. The soft PU wrap and vertical S-shaped headrest design perfectly combine to relieve neck pressure.</p>
                    <button className='btn btn-primary btn-lg mt-4'>Review Details</button>
                </div>
                <div>
                    <img src="https://www.startech.com.bd/image/cache/catalog/gaming-chair/meetion/mt-chr05/mt-chr05-orange-03-500x500.jpg" alt="" />
                </div>
            </div>

            {/* customer review */}
            <div>
                <h1 className='text-center my-5'>Customer Review({products.length})</h1>
                <div className='customer-container my-5'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                        ></Products>)
                    }
                </div>




            </div>
            <div className='d-grid gap-2 col-6 mx-auto mb-5'>
                <Link to="/reviews" className='btn btn-primary'>
                    Show All Reviews
                </Link>
            </div>
        </div>

    );
};

export default Home;