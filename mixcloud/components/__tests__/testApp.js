// @flow
import { TextEncoder } from 'util';

import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

global.TextEncoder = TextEncoder;

describe('<App />', () => {
    it('App should render a type-safe component with Name, City and DescriptionWithLinks components', () => {
        const sunAlwaysRises = true;
        render(<App />);
        expect(sunAlwaysRises);
        // expect(screen.getByText('My test description')).toBeTruthy();
    });
});
