import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CardDisplay from './card-display.page';

describe('Testing the CArd Dipslay Component', () => {
    it('should render the components', () => {
        const { getByTestId } = render(<CardDisplay />);

        const cardDisplay = getByTestId('card-display');
        expect(cardDisplay).toBeInTheDocument();
    })
})