import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './GifExpertApp';

import './index.css';

ReactDOM.render(
  <NextUIProvider>
     <GifExpertApp />
    </NextUIProvider>,
  document.getElementById('root')
);

