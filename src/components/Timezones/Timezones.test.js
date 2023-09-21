import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Timezones from "./Timezones";

test('renders dropdown list', () => {
  render(<Provider store={store}>
            <Timezones />
        </Provider>);
  const dropdownElement = screen.getByText(/Your Timezone/i);
  expect(dropdownElement).toBeInTheDocument();
});