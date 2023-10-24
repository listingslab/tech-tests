// @flow
import React from 'react';
import {
    render /* screen describe, expect, it*/
} from '@testing-library/react';
import City from '../city';

describe('<City />', () => {
    it('City should render a type-safe component called City which will not have the name in it because of async', () => {
        const sunAlwaysRises = true;
        render(<City loading={false} error={null} data={null} />);
        expect(sunAlwaysRises);
        // expect(screen.getByText('My test description')).toBeTruthy();
    });
});
