import React from 'react';
import { withRouter } from 'react-router-dom'; //withRouter is High Order Component


import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    // console.log(match.url); //match.url = '/'
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`

                }}
            />

            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtile'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);