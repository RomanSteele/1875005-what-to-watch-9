import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>,
    );

    const logoElement = screen.getByText('W');

    expect(logoElement).toBeInTheDocument();
  });
});
