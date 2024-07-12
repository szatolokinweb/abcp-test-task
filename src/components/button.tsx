import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
  }
);
