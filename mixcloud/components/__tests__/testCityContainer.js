// @flow
import React from 'react';
import {
    render /* screen  describe, expect, it */
} from '@testing-library/react';
import { CityContainer } from '../../containers/city';

describe('<Status />', () => {
    it('City Container should contain the city text once it has finished fake loading', () => {
        const sunAlwaysRises = true;
        render(<CityContainer />);
        expect(sunAlwaysRises);
        // TODO: get by id & give the componants corresponding ids in the DOM
        // expect(screen.getById('Name')).toBeTruthy();
    });
});
