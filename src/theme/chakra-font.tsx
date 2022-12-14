import React from 'react';
import {Global} from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        src: url('assets/fonts/Poppins-ExtraBold.ttf')
        font-display: swap;
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        src: url('assets/fonts/Inter.ttf') format('truetype');
        font-display: swap;
      }
      `}
  />
);

export default Fonts;