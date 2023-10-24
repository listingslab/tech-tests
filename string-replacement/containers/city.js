// @flow
import React from 'react';
import City from '../components/city';

type StatusShape = {
    loading: boolean,
    data: ?Object,
    error: ?Object
};

export function CityContainer(): Object {
    const [city, setCity] = React.useState<StatusShape>({
        loading: false,
        error: null,
        data: null
    });
    React.useEffect(() => {
        const { loading, data, error } = city;
        if (!loading && !data && !error) {
            setCity({ ...city, loading: true });
            setTimeout(() => {
                setCity({
                    loading: false,
                    error: null,
                    data: {
                        city: 'London, UK'
                        // city: 'Valetta, Malta',
                    }
                });
            }, 2000);
        }
    }, [city, setCity]);
    const { loading, error, data } = city;
    return <City {...{ loading, error, data }} />;
}

export default CityContainer;
