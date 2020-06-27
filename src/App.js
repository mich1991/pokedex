import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header'
import PokemonList from './components/PokemonList/PokemonList'
import Pokemon from './components/Pokemon/Pokemon'
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

    const fetchAPI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    fetch(fetchAPI)
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data.results, }))

  }
  // First rendering with generation 1
  componentDidMount() {

    this.fetchAPI()
  }

  componentDidUpdate(prevProps, prevState) {

    // List updating
    if (this.state.currentGeneration.limit !== prevState.currentGeneration.limit || this.state.currentGeneration.offset !== prevState.currentGeneration.offset) {
      console.log('pokemonList did update');
      this.fetchAPI()
    }
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
          <Col sm={12} md={2} className='pl-0 pr-0 md-0 mr-3'> <PokemonList pokemonList={this.state.pokemons} generation={this.state.currentGeneration} currentPokemon={this.state.currentPokemon} click={this.currentPokemonHandler} /></Col>
          <Col> <Pokemon currentPokemon={this.state.currentPokemon} generation={this.state.currentGeneration} /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
