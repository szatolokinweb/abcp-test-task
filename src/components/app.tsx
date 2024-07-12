import React, { useCallback } from "react";
import { Button } from "./button";
import { UserInfo } from "./user-info";
import { useLoadedData } from "../hooks/use-loaded-data";
import { useThrottle } from "../hooks/use-throttle";
import { User, cachedLoadUser } from "../providers/users";
import { generateId } from "../utils/generate-id";

export const App: React.FC = () => {
  const [user, isLoading, error, loadData] = useLoadedData<User>();

  const throttledLoadRandomUser = useThrottle(() => {
    loadData(cachedLoadUser(generateId()));
  }, []);

  const onClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.stopPropagation();
      throttledLoadRandomUser();
    },
    []
  );

  return (
    <div className="layout">
      <h1>Random user</h1>
      <Button onClick={onClick}>Get a random user</Button>
      <div>
        {isLoading ? (
          "Loading..."
        ) : user ? (
          <UserInfo name={user.name} phone={user.phone} />
        ) : error ? (
          "Error"
        ) : (
          "No data"
        )}
      </div>
    </div>
  );
};
