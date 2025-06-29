import { render, screen } from '@testing-library/react';
import ServiceCard from '../components/ServiceCard.jsx';

test('renders ServiceCard title & price', () => {
  render(<ServiceCard title="Test Service" price="$123" desc="Sample"/>);
  expect(screen.getByText(/Test Service/i)).toBeInTheDocument();
  expect(screen.getByText(/\$123/)).toBeVisible();
});
