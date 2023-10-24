// @flow
import React from 'react';
import { Alert, LinearProgress, Typography } from '@mui/material';

type StatusShape = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function City({ loading, error, data }: StatusShape): Object {
    if (loading) {
        return <LinearProgress color="secondary" />;
    }
    if (error) {
        return (
            <Alert data={data} severity="warning">
                {error}
            </Alert>
        );
    }
    if (data) {
        const { city } = data;
        return <Typography variant="h6">{city}</Typography>;
    }
    return null;
}
