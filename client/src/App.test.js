import React from 'react';
import {render, mount} from '@testing-library/react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from './App';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders a header', () => {
    const wrapper = render(<App />);

    const hasHeader = wrapper.getByText(/List of all Players/i);
    expect (hasHeader).toBeDefined();
})


it('renders a PlayerCard name', () => {
    let players = axios.get(`http://localhost:5000/api/players`);
    const wrapper = render(<PlayerCard data={players} />);
    const hasPlayerCardName = wrapper.getByText(/Name/i);

    expect(hasPlayerCardName).toBeDefined();
})

it('renders a PlayerCard country', () => {
    let players = axios.get(`http://localhost:5000/api/players`);
    const wrapper = render(<PlayerCard data={players} />);
    const hasPlayerCardCountry = wrapper.getByText(/Country/i);

    expect(hasPlayerCardCountry).toBeDefined()
});



it('renders a PlayerCard search number field', () => {
    let players = axios.get(`http://localhost:5000/api/players`);
    const wrapper = render(<PlayerCard data={players} />);
    const hasPlayerCardSearches = wrapper.getByText(/Searches/i);

    expect(hasPlayerCardSearches).toBeDefined();


})

