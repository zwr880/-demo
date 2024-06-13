import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom'


function Home()
{
    const navigate = useNavigate()
    function goDetail()
    {
      navigate('/detail')
    }
    return (
        <div className='App'>
            <h2 onClick={goDetail}>仿微信demo体验</h2>
        </div>
    )
}

export default Home;