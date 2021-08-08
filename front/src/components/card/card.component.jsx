import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Tile, Loading } from 'carbon-components-react';

import './card.styles.scss';

const Card = ({ card }) => {

    const catGif = require('../../assets/' + card.src).default;
    const [loading, setLoading] = useState(true);
    const imageLoaded = () => {
        setLoading(false);
    }

    return (
        <Tile className='cat-card'>
            <div>
                <h1>{card.title}</h1>
                <h2>{card.type}</h2>
            </div>
            <div style={{ display: loading ? "block" : "none" }}>
                <Loading data-testid="loader"
                    description="Active loading indicator"
                    withOverlay={false}
                />
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
                <img
                    data-testid={`${card.src}`}
                    src={catGif}
                    onLoad={imageLoaded} />
            </div>

        </Tile>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
