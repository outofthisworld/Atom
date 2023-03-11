import { Todo } from "../Types";

export async function fetchUserTodos(userId): Promise<Todo[]> {
  const todos = await new Promise<Todo[]>((resolve) => {
    setTimeout(function () {
      resolve([
        {
          id: 1,
          todo: "This is one todo",
          userId
        },
        {
          id: 2,
          todo: "This is one todo",
          userId
        },
        {
          id: 3,
          todo: "This is one todo",
          userId
        }
      ]);
    }, 3000);
  });
  return todos;
}
