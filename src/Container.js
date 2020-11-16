import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// import axios from "axios";
import data from './data/data';

const Container = () => {
    // console.log('catState ', catState.location.state)
    // const catStateredirection = catState.location.state


    const [dataCat, setDataCat] = useState('');
    const [cat1, setCat1] = useState('');
    const [cat2, setCat2] = useState('');
    // const url = 'https://latelier.co/data/cats.json'

    useEffect(() => {
        /*****
          J'ai essayé de faire un appel GET avec axios, mais il ya une erreur de CORS policy donc il n y'a pas d'autorisation d'accés de votre url. du coup je l'ai téléchargé. 
        axios.get(url)
         .then((response) => console(response)
         );

         * ****/

        const newDataCat = data.map(image => {
            image.score = 0;
            return image;
        })
        setDataCat(newDataCat)

        const indexCat1 = Math.floor(Math.random() * dataCat.length);
        const indexCat2 = Math.floor(Math.random() * dataCat.length);

        setCat1(newDataCat[indexCat1])
        setCat2(newDataCat[indexCat2])


    }, [dataCat.length])



    const getRandomCAtandScore = (id) => {
        // console.log(id)
        let copyDataCat = [...dataCat];
        let index = copyDataCat.findIndex(Element => Element.id === id)
        copyDataCat[index] = { ...copyDataCat[index], score: copyDataCat[index].score + 1 }
        setDataCat(copyDataCat)



        const indexCat1 = Math.floor(Math.random() * dataCat.length);
        const indexCat2 = Math.floor(Math.random() * dataCat.length);

        setCat1(dataCat[indexCat1])
        setCat2(dataCat[indexCat2])
    }


    return (


        <div className="App">
            <div className="App-body">
                <p className="text">
                    Cliquez sur l'image pour voter pour le chat le plus mignon
                    </p>
                <div className="cat1Cat2">
                    <div style={{ marginRight: 40 }} className="imgCat">
                        <img src={cat1.url} title="j'aime" alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => getRandomCAtandScore(cat1.id)} />
                        <p> score: {cat1.score} </p>
                    </div>
                    <div className="imgCat">
                        <img src={cat2.url} title="j'aime" alt="logo" style={{ width: 140, height: 160 }} class="img-thumbnail" onClick={_ => getRandomCAtandScore(cat2.id)} />
                        <p> score: {cat2.score} </p>
                    </div>

                </div>
                <NavLink exact to={{
                    pathname: '/scoreAllCat',
                    state: dataCat
                }}
                    activeClassName="navActive">
                    <button type="button" className="btn btn-outline-info">Voir les plus beau chats </button>
                </NavLink>

                <div className="CopyRight">
                    <a
                        className="App-link"
                        href="https://www.linkedin.com/in/ibnrahimathiam/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Copy Right Ibrahima Thiam AKA Lemzo 2020
                    </a>
                </div>
            </div>
        </div>



    );
};

export default Container;