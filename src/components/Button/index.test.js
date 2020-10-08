import React from 'react';
import {render} from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'

import Button from './index'

test("Button/Link should not allowed click if isDisabled is present/true", ()=>{
    const {container} = render(<Button isDisabled></Button>);
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("Button/Link should render word 'loading'/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.spinner-border")).toBeInTheDocument();
});

test("Link external should render anchor tag", () => {
  const { container } = render(
    <Button href="" type="link" isExternal></Button>
  );
  
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Link internal should render anchor tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});