import React from 'react';
import PlayersCard from './PlayersCard';
import Nav from './Nav';
import axios from 'axios';

class Landing extends React.Component {
    constructor() {
        super()
        this.state = {
            playersArr: [],
        }
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
        .then(response => {
            this.setState({playersArr: response.data})
        })
    };

    render() {
        return (
            <div>
            <Nav />
            <div className="card-container">
                <h1>List of all Players</h1>
                {this.state.playersArr.map(player => (
                    <PlayersCard data={player} />
                ))}
            </div>
            </div>

        )
    }
}

export default Landing;
