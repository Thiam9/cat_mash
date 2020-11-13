import React from 'react';
import '../App.css'

const Items = ({ cat }) => {
    // console.log(cat)
    return (


        <ul className="list-group list-group-flush">
            <li className="list-group-item" > <img className="imgListProfil" src={cat.url} alt="img" />  score : {cat.score} </li>

        </ul>


    );
};

export default Items;