import React from 'react';
import { describe, it, vi,  } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import MultiSelectInput from './MultiSelectInput';
import { render  } from '@testing-library/react';

vi.mock('react-select', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('MultiSelectInput', () => {
  describe('default value', () => {
    it('renders MultiSelectInput without crashing', () => {
        render(<MultiSelectInput label='' placeholder='' name='' options={[]} setValue='' trigger='' error='' value='' />)
    }
  )})
});
