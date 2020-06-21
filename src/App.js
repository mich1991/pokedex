import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header'
import PokemonList from './components/PokemonList/PokemonList'
import Pokemon from './components/Pokemon/Pokemon'
import Footer from './components/Footer/Footer'
import { Container, Col, Row, } from 'react-bootstrap'

class App extends Component {
  state = {
    pokemons: [{
      name: '',
      url: '',
    }],
    currentPokemon: '',
  }
  // Fetch pokemons and add them to state
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results }))
  }

  currentPokemonHandler = (e) => {
    e.preventDefault()
    let currentPokemon = e.target.attributes[1].nodeValue
    this.setState({
      currentPokemon
    })

  }
  render() {

    return (
      <Container fluid >
        <Row sm={12} >
          <Header />
        </Row>
        <Row sm={12}>
          <Col sm={2} > <PokemonList pokemonList={this.state.pokemons} currentPokemon={this.state.currentPokemon} click={this.currentPokemonHandler} /> </Col>
          <Col sm={10}> <Pokemon currentPokemon={this.state.currentPokemon} /> </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
