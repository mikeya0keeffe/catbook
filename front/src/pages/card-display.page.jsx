import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Column } from 'carbon-components-react'

import Card from '../components/card.component';
import DATA from './data.json';

const CardDisplay = ({ cards }) => {
    return (
        <Grid data-testid='card-display'>
            <Row>
                {DATA.map(card =>
                    <Column key={card.title} sm={4} md={4} lg={4}>
                        <Card card={card} />
                    </Column>
                )}
            </Row>
        </Grid>
    )
}

CardDisplay.propTypes = {
    cards: PropTypes.array
}

export default CardDisplay
