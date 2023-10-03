import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from "../../redux/store"
import TargetTimeZone from './TargetTimeZone';

test('renders target dropdown', () => {
    render(<Provider store={store}>
              <TargetTimeZone />
          </Provider>);
    const dropdownElement = screen.getByText("Target Timezone");
    expect(dropdownElement).toBeInTheDocument();
});

test('selects timezone from target dropdown', () => {
    render(<Provider store={store}>
        <TargetTimeZone />
    </Provider>);
    const dropdownElement = screen.getByText("Target Timezone");
    fireEvent.click(dropdownElement);
    const option = screen.getByText('Los Angeles (Pacific) (UTC-8)')
    fireEvent.click(option);

    expect(screen.getByText('Los Angeles (Pacific) (UTC-8)')).toBeInTheDocument();
})

test('displays time of selected timezone', () => {
    render(<Provider store={store}>
        <TargetTimeZone />
    </Provider>);
    const dropdownElement = screen.getByText("Target Timezone");
    fireEvent.click(dropdownElement);
    const option = screen.getByText('Los Angeles (Pacific) (UTC-8)')
    fireEvent.click(option);

    const timeZoneText = screen.getByTestId("target-timezone");

    // expect(screen.getByText('Los Angeles (Pacific) (UTC-8)')).toBeInTheDocument();
    expect(screen.get)
})