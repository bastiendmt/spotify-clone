import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { mockPlaylists } from '../../../tests/mockData';
import SideBar from './SideBar';

describe('SideBar', () => {
  test('should render playlists', async () => {
    render(
      <BrowserRouter>
        <SideBar playlists={mockPlaylists.items} />
      </BrowserRouter>,
    );

    expect((await screen.findByRole('heading')).textContent).toBe('Playlists');
    expect((await screen.findAllByRole('link')).length).toBeTruthy();
  });
});
