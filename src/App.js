import "./styles.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { Suspense } from "react";
import { user, userTodos, loggedInState } from "./Atoms";

const Child = () => {
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const [userState] = useRecoilState(user);
  return (
    <>
      <h1>Hello... {userState.username}</h1>
      {!loggedIn && <button onClick={() => setLoggedIn(true)}>Login</button>}
    </>
  );
};

const UserTodos = () => {
  const [todos] = useRecoilState(userTodos);
  return todos.map((todo) => <li key={todo.id}>{JSON.stringify(todo)}</li>);
};

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={null}>
        <Child />
      </Suspense>
      <Suspense fallback={null}>
        <UserTodos />
      </Suspense>
      <h2>Start editing to see some magic happen!</h2>
    </RecoilRoot>
  );
}
