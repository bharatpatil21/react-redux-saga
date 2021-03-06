import React, { useEffect } from "react";
import Card from "./CardComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.users.users;
  });
  console.log('state.users---',users)

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "Bharat Patil",
          company: {
            name: "Test name",
            catchPhrase: "Multi layered client-server",
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 && users.map((user) => (
        <Card user={user} key={user.id}/>
      ))}
      {users.length === 0 && <p>No users available!</p>}
    </>
  );
};

export default Users;
