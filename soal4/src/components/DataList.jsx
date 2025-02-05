import React, { useEffect } from "react";
import Tables from "./Tables";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
import Loading from "./Loading";
import ErrorComponent from "./Error";

const DataList = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center shadow-lg">
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
    <>
      <div className=" bg-white p-8 rounded-xl shadow-xl border-2 border-[#3674B5]">
        <Tables data={data} />
      </div>
    </>
  );
};

export default DataList;
