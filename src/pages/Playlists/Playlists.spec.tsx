import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { mockPlaylists } from '../../../tests/mockData';
import Playlists from './Playlists';

describe('Playlists', () => {
  test('should render playlists', async () => {
    render(
      <BrowserRouter>
        <Playlists playlists={mockPlaylists} message="mock message" />
      </BrowserRouter>,
    );

    expect((await screen.findByRole('heading')).textContent).toBe(
      'Playlists - mock message',
    );
    expect(screen.getByText('Hits du Moment')).toBeTruthy();
  });
});
