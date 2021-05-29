import React from 'react';

const TypeItem = ({ imgSrc }) => {
    console.log(imgSrc);
    return <img src={'/images/'+imgSrc+'.jpg'} width={100}/>;
};

export default TypeItem;