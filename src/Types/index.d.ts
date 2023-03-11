export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Todo {
  id: number;
  todo: string;
  userId: number;
}
