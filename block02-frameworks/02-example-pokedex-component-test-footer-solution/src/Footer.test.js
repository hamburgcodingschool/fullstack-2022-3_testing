import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the correct Copyright', async () => {
  render(<Footer copyright="this is some text"/>);

  const footer = screen.getByTestId("footer");
  
  expect(footer.textContent).toBe("this is some text"); 
});
