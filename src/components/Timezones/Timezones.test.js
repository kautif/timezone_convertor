import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Timezones from "./Timezones";

test('renders user dropdown', () => {
  render(<Provider store={store}>
            <Timezones />
        </Provider>);
  const dropdownElement = screen.getByText(/Your Timezone/i);
  expect(dropdownElement).toBeInTheDocument();
});

test('renders target dropdown', () => {
    render(<Provider store={store}>
              <Timezones />
          </Provider>);
    const dropdownElement = screen.getByText(/Target Timezone/i);
    expect(dropdownElement).toBeInTheDocument();
});

test('selects timezone from user dropdown', () => {
    const {getByText} = render(<Provider store={store}>
        <Timezones />
    </Provider>);
    const dropdownElement = getByText(/Your Timezone/i);
    fireEvent.click(dropdownElement);
    const option = getByText('Los Angeles (Pacific) (UTC-8)')
    fireEvent.click(option);

    expect(getByText('Los Angeles (Pacific) (UTC-8)')).toBeInTheDocument();
})

test('selects timezone from target dropdown', () => {
    const {getByText} = render(<Provider store={store}>
        <Timezones />
    </Provider>);
    const dropdownElement = getByText(/Target Timezone/i);
    fireEvent.click(dropdownElement);
    const option = getByText('Los Angeles (Pacific) (UTC-8)')
    fireEvent.click(option);

    expect(getByText('Los Angeles (Pacific) (UTC-8)')).toBeInTheDocument();
})