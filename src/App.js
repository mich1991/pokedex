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
    currentPokemon: null,
    currentGeneration: {
      limit: '151',
      offset: '0',
    },
    isLoaded: false
  }

  fetchAPI = () => {
    const { limit, offset } = this.state.currentGeneration
    // console.log(limit, offset);
    const fetchAPI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    fetch(fetchAPI)
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results, }))

  }
  // First rendering with generation 1
  componentDidMount() {

    this.fetchAPI()
  }




  // Choose pokemon from list in PokemonList.js
  currentPokemonHandler = (e) => {
    e.preventDefault()
    let currentPokemon = e.target.attributes[1].nodeValue
    this.setState({
      currentPokemon
    })
  }

  currentGenerationHandler = e => {
    e.preventDefault()
    this.setState({
      currentGeneration: {
        limit: e.target.getAttribute("data-limit"),
        offset: e.target.getAttribute("data-offset"),
      },
    })

    this.fetchAPI()
  }



  render() {

    return (
      <Container fluid >
        <Row sm={12} >
          <Header generation={this.state.currentGeneration} click={this.currentGenerationHandler} />
        </Row>
        <Row sm={12}>
          <Col sm={2} > <PokemonList pokemonList={this.state.pokemons} generation={this.state.currentGeneration} currentPokemon={this.state.currentPokemon} click={this.currentPokemonHandler} /> </Col>
          <Col sm={10}> <Pokemon currentPokemon={this.state.currentPokemon} generation={this.state.currentGeneration} /> </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
