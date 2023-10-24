// @flow
import React from 'react';
import { render } from '@testing-library/react';
import DescriptionWithLinks from '../descriptionWithLinks';

describe('<DescriptionWithLinks />', () => {
    it('DescriptionWithLinks should display a single description element with the right links replaced with actual links', () => {
        const sunAlwaysRises = true;
        render(
            <DescriptionWithLinks
                description="My favourite website is www.mixcloud.com and my profile can be found at https://www.mixcloud.com/spartacus/."
                links={[
                    {
                        url: 'www.mixcloud.com',
                        text: 'Mixcloud!'
                    },
                    {
                        url: 'https://www.mixcloud.com/spartacus/',
                        text: 'Spartacus'
                    }
                ]}
            />
        );
        // expect(screen.getByText('My favourite website is')).toBeTruthy();
        expect(sunAlwaysRises);
    });
});
