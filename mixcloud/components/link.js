// @flow
import * as React from 'react';

type LinkShape = {
    url: string,
    children: ?Object
};

export default function Link({ url, children }: LinkShape): Object {
    return (
        <a
            href={url || 'https://www.mixcloud.com/'}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
