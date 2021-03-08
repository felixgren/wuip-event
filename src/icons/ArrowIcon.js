import React from 'react';

const ArrowIcon = (props) => (
    <svg viewBox="0 0 40 18" width={props.w} height={props.h} {...props}>
        <path
            fill={props.color}
            d="M39.2691 0.249997L20 17.663L0.730936 0.25L39.2691 0.249997Z"
            stroke={props.stroke || 'transparent'}
            strokeWidth="1"
        />
    </svg>
);

export default ArrowIcon;
