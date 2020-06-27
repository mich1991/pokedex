import React, { Component } from 'react'
import { Card, CardDeck, Col } from 'react-bootstrap'
import PokemonStats from './PokemonStats/PokemonStats'
import PokemonType from './PokemonType/PokemonType'
import './Pokemon.scss'
import Description from './Description'

// In future change class component into stateless with hooks
class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemon: null,
        }

    }

    fetchPokemon = () => {
        // console.log(this.props);
        const { currentPokemon } = this.props
        fetch(currentPokemon)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data, isLoaded: true
            }))
            .catch(err => console.log('something went wrong' + err))
    }

    componentDidUpdate(prevProps) {
        const { currentPokemon } = this.props

        if (currentPokemon !== null && currentPokemon !== prevProps.currentPokemon) {
            this.fetchPokemon()

            console.log('pokemon did update');
        }
    }

    render() {

        if (this.state.isLoaded === false) {
            return (
                <div>
                    <p>Choose your pokemon! </p>
                </div>
            );
        } else {
            const { name, sprites } = this.state.pokemon
            const capitalizedName = name[0].toUpperCase() + name.slice(1)
            return (
                <CardDeck className='mt-3'>
                    <Col md={4} sm={12}>
                        <Card className="text-center" >
                            <Card.Img variant='top' src={sprites.front_default} ></Card.Img>
                            <Card.Body >
                                <Card.Title >{capitalizedName}</Card.Title>
                                <Description url={this.state.pokemon.species.url} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className='text-center'>Stats</Card.Title>
                                <PokemonStats pokemon={this.state.pokemon} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Card>
                        <Card.Body>
                            <PokemonType types={this.state.pokemon.types} />
                        </Card.Body>
                    </Card>
                </CardDeck>
            )
        }
    }
}

export default Pokemon;