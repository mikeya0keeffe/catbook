import React from 'react'
import PropTypes from 'prop-types'
import { Tile } from 'carbon-components-react';

import './card.styles.scss';

const Card = ({ card }) => {
    const catGif = require('../assets/' + card.src).default;
    return (
        <Tile className='cat-card'>
            <div>
                <h1>{card.title}</h1>
                <h2>{card.type}</h2>
            </div>
            <img src={catGif} />
        </Tile>
    )
}

Card.propTypes = {

}

export default Card
