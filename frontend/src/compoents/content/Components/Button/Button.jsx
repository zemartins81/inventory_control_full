import React from 'react';

export default function Button({text, properties, onClick}) {
    return (
        <button className={properties} type="button" onClick={onClick}> {text} </button>
    );
}