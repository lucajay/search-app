import React from 'react';
import './Chip.css';
import Title from '../Title/Title';
import Released from '../Released/Released';
import FavouriteBtn from '../FavouriteBtn/FavouriteBtn';

function Chip(props) {
    let addLocalHandler = async () => {
        localStorage.setItem(props.data.imdbID, JSON.stringify(props.data));
    }
    
    return (
        <div className="chip">
            {props.data.Poster && props.data.Poster != 'N/A' && 
                <img src={props.data.Poster} alt="Person" width="96" height="96">
                </img>
            }
            <div className="description">
                {props.data.Title && 
                    <Title title={props.data.Title}/>
                }
                {props.data.Released && 
                    <Released date={props.data.Released} />
                }
                {props.data.imdbID && 
                    <FavouriteBtn data={props.data} addLocal={addLocalHandler} isFav={0}/>
                }
            </div>
        </div>
    );
}

export default Chip;
