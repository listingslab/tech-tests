// @flow
import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '../link';

describe('<Link />', () => {
    it('Link component should open a new window when clicked', () => {
        render(<Link url="https://www.mixcloud.com/">Mixcloud!</Link>);
        expect(screen.getByText('Mixcloud!')).toBeTruthy();
    });
});
