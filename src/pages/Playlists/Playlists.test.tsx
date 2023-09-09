import { render, screen } from '@testing-library/react';
import Playlists from './Playlists';
import { test, describe, expect } from 'vitest';
import { mockPlaylists } from '../../../tests/mockData';
import { BrowserRouter } from 'react-router-dom';

describe('', () => {
  test('should render playlists', async () => {
    render(
      <BrowserRouter>
        <Playlists playlists={mockPlaylists} message='mock message' />
      </BrowserRouter>,
    );

    expect((await screen.findByRole('heading')).textContent).toBe(
      'Playlists - mock message',
    );
    expect(screen.getByText('Hits du Moment')).toBeTruthy();
  });
});
