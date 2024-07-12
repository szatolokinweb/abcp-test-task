import { Cache } from "../utils/cache";

export interface User {
  id: number;
  name: string;
  phone: string;
}

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const USERS_CACHE = new Cache<User>();

const formatUserUrl = (id: number) => {
  return `${USERS_URL}/${id}`;
};

const loadUser = (id: number) => {
  return fetch(formatUserUrl(id)).then((response) => response.json());
};

export const cachedLoadUser = (id: number): Promise<User> => {
  const cachedUser = USERS_CACHE.getByKey(id);

  if (cachedUser) {
    return Promise.resolve(cachedUser);
  }

  return loadUser(id).then((user) => {
    USERS_CACHE.setByKey(user.id, user);
    return user;
  });
};
