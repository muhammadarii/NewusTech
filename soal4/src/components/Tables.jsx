import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
import Loading from "./Loading";
import ErrorComponent from "./Error";
const Tables = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center shadow-lg">
        <ErrorComponent error={error} />
      </div>
    );
  }
  return (
    <div>
      <table className="bg-[#A1E3F9] border border-gray-300 shadow-xl">
        <thead>
          <tr className="bg-[#3674B5] text-white">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-[#578FCA] hover:text-white text-black"
            >
              <td className="py-2 px-4 border-b text-center">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b text-center">
                {user.username}
              </td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{`${user.address.city}, ${user.address.street}`}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
