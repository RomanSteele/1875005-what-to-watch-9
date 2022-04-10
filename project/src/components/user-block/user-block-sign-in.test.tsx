import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import UserBlockSignIn from './user-block-sign-in';

describe('Component: UserBlockSignIn', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <UserBlockSignIn />
      </HistoryRouter>,
    );

    const linkElement = screen.getByText('Sign in');

    expect(linkElement).toBeInTheDocument();
  });
});
