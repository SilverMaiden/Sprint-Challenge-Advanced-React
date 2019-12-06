import React from 'react';
import { Card } from 'reactstrap';

const PlayersCard = (props) => {



    return(
        <>
            <Card className="player-card" >
                <span>
                    <p> Name: {props.data.name} </p>
                    <p> Country: {props.data.country} </p>
                    <p> Searches: {props.data.searches}</p>
                </span>
            </Card>
        </>

    )
}

export default PlayersCard;
