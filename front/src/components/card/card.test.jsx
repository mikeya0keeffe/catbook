import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Card from './card.component';

import DATA from '../../pages/data.json';

describe('Testing the card component', () => {
    it('Shoud render the card component', () => {
        const { getByText } = render(<Card card={DATA[0]} />);

        const title = getByText(DATA[0].title);
        expect(title).toBeInTheDocument();

        const type = getByText(DATA[0].type);
        expect(type).toBeInTheDocument();
    })
})