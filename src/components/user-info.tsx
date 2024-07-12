import React from "react";

interface Props {
  name: string;
  phone: string;
}

export const UserInfo: React.FC<Props> = React.memo(({ name, phone }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </table>
  );
});
