import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Todo from './Todo'

test('todo component contains correct text', () => {
    const todo = {
        text: "Test",
        done: false
    };

    const comp = render(<Todo todo={todo} onClickComplete={() => {}} onClickDelete={() => {}} />)
    expect(comp.container).toHaveTextContent(todo.text);
})