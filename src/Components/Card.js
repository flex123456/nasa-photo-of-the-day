import React from 'react';

const Card = (props) => {
return <div>
    <div>{props.data.date}</div>
    <div>{props.data.explanation}</div>
    <div>{props.data.url}</div>
</div>
}

export default Card;