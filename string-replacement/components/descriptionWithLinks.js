// @flow
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Typography } from '@mui/material';
import Link from './link';

type DescriptionWithLinksShape = {
    description: string,
    links: Array<{
        text: string,
        url: string
    }>
};

function DescriptionWithLinks({
    description,
    links
}: DescriptionWithLinksShape): Object {
    const replaceLinks = () => {
        let descriptionWithLinks = description;
        links.forEach(link => {
            const linkUrl = link.url;
            let u = linkUrl;
            if (u.substring(0, 8) !== 'https://') u = `https://${u}`;
            const linkText = link.text;
            const linkHTML = renderToStaticMarkup(<Link url={u}>{linkText}</Link>);
            descriptionWithLinks = descriptionWithLinks.replace(
                linkUrl,
                linkHTML
            );
        });
        return descriptionWithLinks;
    };
    return (
        <Typography variant="body2">
            <span dangerouslySetInnerHTML={{ __html: replaceLinks() }} />
        </Typography>
    );
}

export default DescriptionWithLinks;
