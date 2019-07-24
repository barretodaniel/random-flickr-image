import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import RandomFlickrImage from '../src/RandomFlickrImage';

storiesOf('RandomFlickrImage', module).add('with defaults', () => <RandomFlickrImage />);
