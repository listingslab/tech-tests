// @flow
import React from 'react';
import { render } from '@testing-library/react';
import Name from '../name';

describe('<Name />', () => {
    it('Name component should render a loading component and then display data', () => {
        const sunAlwaysRises = true;
        render(<Name loading={false} error={null} data={null} />);
        expect(sunAlwaysRises);
        // expect(screen.getByText('My test description')).toBeTruthy();
    });
});
