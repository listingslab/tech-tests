// @flow
import React from 'react';
import Name from '../components/name';

type StatusShape = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function NameContainer(): Object {
    const [name, setName] = React.useState<StatusShape>({
        loading: false,
        error: null,
        data: null
    });
    React.useEffect(() => {
        const { loading, data, error } = name;
        if (!loading && !data && !error) {
            setName({ ...name, loading: true });
            setTimeout(() => {
                setName({
                    loading: false,
                    error: null,
                    data: {
                        name: 'Spartacus Smith'
                        // name: 'Chris Dorward',
                    }
                });
            }, 2500);
        }
    }, [name, setName]);
    const { loading, error, data } = name;
    return <Name {...{ loading, error, data }} />;
}
