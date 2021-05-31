import React from 'react';

const TypeItem = ({ imgSrc }) => {
    console.log(imgSrc);
    return <span><img src={'/images/'+imgSrc+'.jpg'} width={100}/></span>;
};

export default TypeItem;