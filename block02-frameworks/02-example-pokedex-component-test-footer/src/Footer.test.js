import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './Footer';

test('renders the correct Copyright', async () => {
  const { container } = render(<Footer copyright="this is some test" />);

  const footer = container.querySelectorAll('footer');
  const footerCount = footer.length;

  expect(footerCount).toEqual(1);
  expect(footer[0]).toHaveTextContent("this is some test");
});
