// @flow
import React from 'react';
import { Alert, LinearProgress, Typography } from '@mui/material';

type StatusShape = {
    loading: boolean,
    error: ?Error,
    data: ?Object
};

export default function Name({ loading, error, data }: StatusShape): Object {
    if (loading) {
        return <LinearProgress color="primary" />;
    }
    if (error) {
        return <Alert severity="warning">{error}</Alert>;
    }
    if (!data) return null;
    const { name } = data;
    return <Typography variant="h4">{name}</Typography>;
}
