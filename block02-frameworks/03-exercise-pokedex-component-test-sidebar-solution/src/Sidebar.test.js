import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom'

test('a menu from the given object', async () => {
  const menu = [
    { text: "Start", target: "start" },
    { text: "One", target: "one" },
    { text: "Two", target: "two" },
    { text: "Three", target: "three" },
    { text: "Four", target: "four" },
  ];

  const { container } = render(<Sidebar menu={menu} />);
  const menuItems = container.querySelectorAll('li');

  expect(menuItems.length).toEqual(menu.length);
  
  menuItems.forEach((li, index) => {
    expect(li).toHaveTextContent(menu[index].text);
  });
});

