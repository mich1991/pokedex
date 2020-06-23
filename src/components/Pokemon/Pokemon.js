import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'

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
        console.log(this.props);
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

            return (
                <CardDeck>
                    <Card>
                        <Card.Img variant='top' src={sprites.front_default} ></Card.Img>
                        <Card.Body>
                            <Card.Title >{name}</Card.Title>
                            <Card.Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, cum. </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </CardDeck>
            )
        }
    }
}

export default Pokemon;