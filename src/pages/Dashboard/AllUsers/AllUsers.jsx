import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user =>{
    console.log(user._id)
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Admin now`,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }
  
  const handleDelete = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data.deletedCount) {
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Delete`,
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }

  return (
    <div className="w-full max-h-full p-4">
      <SectionTitle subHeading={"How Many Users"} heading={"manage all users"}></SectionTitle>
      
      <h1 className="text-2xl font-semibold my-4">
        Total users: {users?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=>handleMakeAdmin(user)} className="btn btn-sm text-white bg-orange-600">
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={()=>handleDelete(user)} className="btn btn-sm text-white bg-red-600">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
