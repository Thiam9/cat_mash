import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Items from './Items';

const CatItem = (cats, props) => {

    // console.log('dataCats: ', cat[0].url)
    const [stateCat] = useState(cats.location.state)
    const valueMaxScore = stateCat.reduce((acc, shot) => acc = acc > shot.score ? acc : shot.score, 0);
    console.log(valueMaxScore)

    let index = stateCat.findIndex(Element => Element.score === valueMaxScore)

    console.log(index)
    console.log(stateCat)




    return (
        <>

            {/* <button type="button" class="btn btn-outline-secondary" onClick={() => props.history.push('/')}>Secondary</button> */}

            <div>
                <div className="container mt-2 ">


                    <div className="ItemCats">
                        <NavLink exact to={{
                            pathname: '/',
                            state: stateCat
                        }} activeClassName="navActive">
                            <button type="button" class="btn btn-outline-secondary" style={{ marginLeft: 25 }} >Revenir au vote</button>
                        </NavLink>
                        {stateCat.map((cat) => <Items key={cat.id} cat={cat} />)}



                    </div>

                    <div className="catMax">
                        <p style={{ marginLeft: 40 }} className="title">Le chats le plus mignon</p>

                        <img src={stateCat[index].url} alt="cat" className="img-thumbnail" />
                        <p style={{ marginLeft: 110 }} className="title">Score: {stateCat[index].score} </p>



                    </div>

                </div>
            </div>
        </>



    );
};

export default CatItem;
