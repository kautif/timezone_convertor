import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import UserTimeZone from './UserTimeZone';

test('renders user dropdown', () => {
  render(<Provider store={store}>
            <UserTimeZone />
        </Provider>);
  const dropdownElement = screen.getByText(/Your Timezone/i);
  expect(dropdownElement).toBeInTheDocument();
});

test('selects timezone from user dropdown', () => {
    const {getByText} = render(<Provider store={store}>
        <UserTimeZone />
    </Provider>);
    const dropdownElement = getByText(/Your Timezone/i);
    fireEvent.click(dropdownElement);
    const option = getByText('Los Angeles (Pacific) (UTC-8)')
    fireEvent.click(option);

    expect(getByText('Los Angeles (Pacific) (UTC-8)')).toBeInTheDocument();
})