import React from 'react';

import { storiesOf } from '@storybook/react';

import RandomFlickrImage, { Sizes } from '../src/RandomFlickrImage';

storiesOf('RandomFlickrImage', module)
    .add('with defaults (3 seconds)', () => <RandomFlickrImage />)
    .add('with interval set to 5 seconds', () => <RandomFlickrImage interval={5} />)
    .add('with a set size', () => <RandomFlickrImage size={Sizes.LargeSquare} />)
    .add('adding styles', () => (
        // you can also pass `className` to override styles
        <RandomFlickrImage
            style={{ border: '1px solid #CCC', padding: 8, borderRadius: 150 }}
            size={Sizes.LargeSquare}
        />
    ));
