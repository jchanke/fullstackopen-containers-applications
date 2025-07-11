import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders content", () => {
  const todo = {
    text: "Component testing is done with react-testing-library",
    done: true,
  };

  const mockOnClickComplete = vi.fn();
  const mockOnClickDelete = vi.fn();

  render(
    <Todo
      todo={todo}
      onClickComplete={mockOnClickComplete}
      onClickDelete={mockOnClickDelete}
    />
  );

  const element = screen.getByText(todo.text);
  // const element = screen.getByText(`hey, ${todo.text}`); // fails test

  expect(element).toBeDefined();
});
