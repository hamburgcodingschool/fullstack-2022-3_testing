import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom'

test('renders the correct Copyright', async () => {
  const { container } = render(<Footer copyright="this is some text"/>);

  const footer = container.querySelectorAll('footer');
  
  expect(footer[0]).toHaveTextContent('this is some text');
});
