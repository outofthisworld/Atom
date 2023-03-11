import { User } from "../Types";

export async function fetchUser(): Promise<User> {
  const user = await new Promise<User>((resolve) => {
    setTimeout(function () {
      resolve({
        id: 1,
        username: "Dale",
        password: "Test"
      });
    }, 3000);
  });
  return user;
}
