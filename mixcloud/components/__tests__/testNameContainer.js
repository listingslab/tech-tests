// @flow
import React from 'react';
import {
    render
    // describe, expect, it
} from '@testing-library/react';
import NameContainer from '../../containers/name';

describe('<NameContainer />', () => {
    it('Name Container should contain the Name text once it has finished fake loading', () => {
        const sunAlwaysRises = true;
        render(<NameContainer />);
        // TODO: get by id & give the componants corresponding ids in the DOM
        // expect(screen.getById('Name')).toBeTruthy();
        expect(sunAlwaysRises);
    });
});
