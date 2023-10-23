// @flow
import React from 'react';
import {
    CssBaseline,
    Card,
    CardHeader,
    CardContent,
    Container
} from '@mui/material';
import Theme from '../theme/Theme';
import Name from '../containers/name';
import City from '../containers/city';
import DescriptionWithLinks from './descriptionWithLinks';

export default function App(): Object {
    return (
        <Theme>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ my: 2 }}>
                <Card>
                    <CardHeader
                        sx={{ minHeight: 110 }}
                        title={<Name />}
                        subheader={<City />}
                    />
                    <CardContent>
                        <DescriptionWithLinks
                            description="My favourite website is www.mixcloud.com and my profile can be found at https://www.mixcloud.com/spartacus/  Find out more about the historical figure of Spartacus; https://en.wikipedia.org/wiki/Spartacus"
                            links={[
                                {
                                    url: 'www.mixcloud.com',
                                    text: 'Mixcloud!'
                                },
                                {
                                    url: 'https://www.mixcloud.com/spartacus/',
                                    text: 'Spartacus'
                                },
                                {
                                    url: 'https://en.wikipedia.org/wiki/Spartacus',
                                    text: 'Click Here'
                                }
                            ]}
                        />
                    </CardContent>
                </Card>
            </Container>
        </Theme>
    );
}
