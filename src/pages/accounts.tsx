import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useSession } from "../contexts/AuthContext";

const Accounts: NextPage = () => {
  const session = useSession();

  const [allUsers, setAllUsers] = useState<any[]>([]);

  const getUsers = async () => {
    await axios
      .get(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/get`
      )
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeUser = async (id: string) => {
    await axios
      .delete(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === "PRODUCTION"
            ? process.env.NEXT_PUBLIC_PRODUCTION_API
            : process.env.NEXT_PUBLIC_DEVELOPMENT_API
        }/account/del/${id}`
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const users = allUsers?.sort((a: any, b: any) =>
    a.role > b.role ? 1 : b.role > a.role ? -1 : 0
  );

  useEffect(() => {
    getUsers();
  }, []);

  if (session?.role === "a") {
    return (
      <div className="min-h-screen w-full bg-background-100 p-6">
        <table className="table-auto text-left w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>nickName</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>role</th>
              <th>grade</th>
              <th>sex</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, idx: number) => {
              return (
                <tr key={idx}>
                  <td>{user.id}</td>
                  <td>{user.nickName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    {(user.role === "a" && "admin") ||
                      (user.role === "s" && "student") ||
                      (user.role === "p" && "prefect") ||
                      (user.role === "t" && "teacher")}
                  </td>
                  <td>
                    {user.role === "s" || user.role === "p" ? user.grade : ""}
                  </td>
                  <td>
                    {(user.sex === "m" && "male") ||
                      (user.sex === "f" && "female") ||
                      (user.sex === "o" && "other")}
                  </td>
                  <td className="flex">
                    <div
                      className="bg-white rounded-full p-1 cursor-pointer"
                      onClick={async () => {
                        await removeUser(user._id);
                        getUsers();
                      }}
                    >
                      <FiX />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default Accounts;
