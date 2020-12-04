import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (  
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p></p>
                <h1>Photographers nearby</h1>
                <Button
                 variant="outlined">Price
                </Button>
                <Button
                 variant="outlined">Type  
                </Button>
                <Button
                 variant="outlined">Cancellation Flexibility
                </Button>
                <Button
                 variant="outlined">More filters 
                </Button>
            </div>
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={5.0}
              price="₹1999/ day"
              total="₹75999/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={4.68}
              price="₹1299/ day"
              total="₹75999/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={4.68}
              price="₹1299/ day"
              total="₹75999/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={4.68}
              price="₹1299/ day"
              total="₹75999/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={4.68}
              price="₹1299/ day"
              total="₹75999/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/ZWvKSZH/smarty.png"
              location="Jaipur"
              title="Burhanuddin Bohra"
              description="phorography - videography - event - social - product"
              star={4.8}
              price="₹1500/ day"
              total="₹90000/ total"
            />
            <SearchResult 
              img="https://i.ibb.co/LCm9tX6/smarty2.png"
              location="Jaipur"
              title="Shubham Bajaj"
              description="phorography - videography - event - social - product"
              star={4.68}
              price="₹1299/ day"
              total="₹75999/ total"
            />
        </div>
    );
}
 
export default SearchPage;