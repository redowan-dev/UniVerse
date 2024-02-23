import React from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

const AdminProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  console.log(user);
  const [editing, setEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await updateUser(newDisplayName);
      setEditing(false);

      Swal.fire({
        icon: "success",
        title: "Updated Successfully",
        text: "Your display name has been updated.",
      });
    } catch (error) {
      console.error("Error updating display name:", error);

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "There was an error updating your display name. Please try again.",
      });
    }
  };
  return (
    <div className="flex  justify-center items-center h-screen ">
      <div className="flex flex-col  justify-center items-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        {user?.photoURL ? (
          <div className="w-20 rounded-full ">
            <img
              src={user?.photoURL}
              alt=""
              className=" rounded-full dark:bg-gray-500 aspect-square"
            />
          </div>
        ) : (
          <>
            <img
              src="https://i.ibb.co/j3qPff8/0y12u4x7.png"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
          </>
        )}

        <div className="space-y-4 text-center divide-y divide-gray-700">
          {editing ? (
            <div>
              <input
                type="text"
				required
                value={newDisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                placeholder="Enter new display name"
                className="input input-bordered input-info w-full max-w-xs"
              />
              <div className="flex justify-between">
             
              <button className="py-2 hover:text-red-600" onClick={() => setEditing(false)}>Undo</button>
              <button className="py-2 hover:text-green-600" onClick={handleSubmit}>Save</button>
              </div>
              
            </div>
          ) : (
            <div className="my-2 space-y-1">
              <div className="flex justify-between">
           <h2 className="px-2 text-xs sm:text-base dark:text-gray-400">
                 <span className="px-2 text-xs sm:text-base dark:text-gray-400"> Name:</span> {user?.displayName}
                </h2>
                <div className="flex justify-end pt-2 space-x-4 align-center">
                  <button onClick={() => setEditing(true)}><FaEdit /></button>
                </div>
              
              </div>

              <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          )}
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <Link to="/forgetpass" className="hover:text-red-300">
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
