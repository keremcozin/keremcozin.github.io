// components/catAvatar.js

import React from 'react';

const CatAvatar = () => {
    return (
        <div
            style={{
                margin: 4,
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
        >    
            <img src={require('../assets/cat-profile.png')} height="200" width="200" />
        </div>
    );
}

export default CatAvatar