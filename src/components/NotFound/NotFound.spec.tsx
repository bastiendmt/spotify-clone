import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import NotFound from './NotFound';

describe('NotFound', () => {
  test('should render NotFound', async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    expect((await screen.findAllByRole('link')).length).toBeTruthy();
  });
});
