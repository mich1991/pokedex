import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header'
import PokemonList from './components/PokemonList/PokemonList'
import Pokemon from './components/Pokemon/Pokemon'
import Footer from './components/Footer/Footer'
import { Container, Col, Row, Button } from 'react-bootstrap'

class App extends Component {
  state = {
    pokemons: [{
      name: '',
      url: ''
    }]
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results }))
  }

  render() {

    return (
      <Container fluid >
        <Row sm={12} >
          <Header />
        </Row>
        <Row sm={12}>
          <Col sm={2} > <PokemonList pokemonList={this.state.pokemons} /> </Col>
          <Col sm={10}> <Pokemon /> </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
