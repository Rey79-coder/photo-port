import React from 'react';

// we'll retrieve some functions from the React Testing Library.
import { render, cleanup } from '@testing-library/react';

// we will import the extend-expect library from the jest-dom package.
import '@testing-library/jest-dom/extend-expect';

import About from '../../../components/About/index';


afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
      });
    // Second Test
  })