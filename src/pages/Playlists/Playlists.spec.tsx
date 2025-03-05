import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { mockPlaylists } from '../../../tests/mockData';
import Playlists from './Playlists';

describe('Playlists', () => {
  test('should render playlists', async () => {
    const message = 'mock message';
    render(
      <BrowserRouter>
        <Playlists playlists={mockPlaylists.items} message={message} />
      </BrowserRouter>,
    );

    expect((await screen.findByRole('heading')).textContent).toBe(message);
    expect(screen.getByText('Hits du Moment')).toBeTruthy();
  });
});
