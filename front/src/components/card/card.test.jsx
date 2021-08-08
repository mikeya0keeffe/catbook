import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { waitFor, render } from '@testing-library/react';
import Card from './card.component';

import DATA from '../../pages/data.json';

describe('Testing the card component', () => {
    it('Shoud render the card component', async () => {
        const { getByText, getByTestId } = render(<Card card={DATA[0]} />);

        const title = getByText(DATA[0].title);
        expect(title).toBeInTheDocument();

        const type = getByText(DATA[0].type);
        expect(type).toBeInTheDocument();

        const image = getByTestId(DATA[0].src);
        expect(image).toBeInTheDocument();
    })

    it('should display the spinner on loading file', () => {
        const DUD_CAT = { type: 'None', title: 'Test', src: 'dud.gif' }
        const { getByTestId } = render(<Card card={DUD_CAT} />);

        const loader = getByTestId("loader");
        expect(loader).toBeVisible();
    })
})