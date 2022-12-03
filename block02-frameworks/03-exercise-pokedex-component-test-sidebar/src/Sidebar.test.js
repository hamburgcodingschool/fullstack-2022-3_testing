import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

test("it renders the menu as given", async () => {
  const menu = [
    { text: "Start", target: "start" },
    { text: "One", target: "one" },
    { text: "Two", target: "one" },
    { text: "Three", target: "one" },
    { text: "Four", target: "one" },
    { text: "Five", target: "one" },
  ]
  const { container } = render(<Sidebar menu={menu} />);

  // const sidebar = screen.getByTestId("sidebar");

  const menuItems = container.querySelectorAll('li');

  expect(menuItems.length).toEqual(menu.length);
  menuItems.forEach((li, index) => {
    expect(li).toHaveTextContent(menu[index].text);
  });
});