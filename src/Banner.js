import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

const Banner = () => {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return ( 
        <div className="banner">
            <div className="banner__search">
                 {showSearch && <Search />}
                <Button onClick ={()=>setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
                    {showSearch ? "Hide" :"Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>The painter constructs, the photographer discloses</h1>
                <Button onClick={() => history.push('/search')} variant="outlined">Explore</Button>
            </div>
        </div> 
     );
}
 
export default Banner;