import React from 'react';
import {Global} from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'CircularStd';
        font-style: normal;
        font-weight: normal;
        src: url('/fonts/CircularStd-Book.ttf') format('truetype');
        font-display: swap;
      }
      @font-face {
        font-family: 'CircularStd';
        font-style: normal;
        font-weight: bold;
        src: url('/fonts/CircularStd-Bold.ttf') format('truetype');
        font-display: swap;
      } 
      @font-face {
        font-family: 'SecularOne';
        font-style: normal;
        font-weight: normal;
        src: url('/fonts/SecularOne-Regular.ttf') format('truetype');
        font-display: swap;
      }
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        src: url('/fonts/Inter.ttf') format('truetype');
        font-display: swap;
      }
      `}
  />
);

export default Fonts;