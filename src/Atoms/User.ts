import { atom, selector } from "recoil";
import { loggedInState } from "../Atoms";
import * as Api from "../Api";
import { User } from "../Types";

type OptionalUser = User | {};

const authenticatedFetch = (func: (params: any) => {}, fallback: unknown) => (
  params
) => {
  const { get } = params;
  const loggedIn = get(loggedInState);
  if (!loggedIn) return fallback;
  return func(params);
};

export const user = atom<OptionalUser>({
  key: "User",
  default: selector<OptionalUser>({
    key: "UserLoggedInState",
    get: authenticatedFetch(() => Api.fetchUser(), {})
  })
});

export const userTodos = selector({
  key: "UserTodos",
  get: authenticatedFetch(({ get }) => Api.fetchUserTodos(get(user).id), [])
});
