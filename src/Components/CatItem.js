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
            <div>
                <div className="btnReturnSmallSize">
                    <NavLink exact to={{ pathname: '/', }} activeClassName="navActive">
                        <button type="button" class="btn btn-outline-secondary btnReturn" style={{ marginLeft: 25 }} >Recommencer le vote</button>
                    </NavLink>

                </div>
                <div className="container mt-2 ">


                    <div className="ItemCats">
                        {stateCat.map((cat) => <Items key={cat.id} cat={cat} />)}
                    </div>

                    <div className="catMax">
                        <p style={{ marginLeft: 40 }} className="title">Le chats le plus mignon</p>

                        <img src={stateCat[index].url} alt="cat" className="img-thumbnail" />
                        <p style={{ marginLeft: 110 }} className="title">Score: {stateCat[index].score} </p>
                        <div className="btnReturn">
                            <NavLink exact to={{ pathname: '/', }} activeClassName="navActive">
                                <button type="button" class="btn btn-outline-secondary btnReturn" style={{ marginLeft: 25 }} >Recommencer le vote</button>
                            </NavLink>

                        </div>



                    </div>

                </div>
            </div>
        </>



    );
};

export default CatItem;
