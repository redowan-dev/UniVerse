
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import line from '../../../assets/Img/line.png'
import { AuthContext } from '../../../Providers/AuthProvider';
const AllUsers = () => {
  const {user} = useContext(AuthContext);
console.log(user.email);
    const [userData, setUserData] = useState([]);
    console.log(userData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://book-your-college-server-copy.vercel.app/users")
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setUserData(data);
          })
          .catch((error) => {
            console.error('Error fetching blog data:', error);
            setLoading(false);
            // Handle the error or set userData to a default value (e.g., [])
            setUserData([]);
          });
      }, []);
     

      const handleAdmin = (ListUser) => {
        fetch(`https://book-your-college-server-copy.vercel.app/users/admin/${ListUser._id}`, {
          method: "PATCH",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            id: ListUser._id,
            role: "admin", 
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          (data.modifiedCount) 
             
    
              Swal.fire({
                title: "Sweet!",
                text: `${ListUser.name} is Now Admin`,
                imageUrl:
                  "https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
              });

              location.reload();
            
          });
      };

      const handleRemoveAdmin = (ListUser) => {
        fetch(`https://book-your-college-server-copy.vercel.app/users/removeadmin/${ListUser._id}`, {
          method: "PUT",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            id: ListUser._id,
            role: "user", 
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
             (data.modifiedCount ) 
      
              Swal.fire({
                title: "Sweet!",
                text: `${ListUser.name} is No Longer Admin`,
                imageUrl:
                  "https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg",
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: "Custom image",
              });
              location.reload();
            
          })
          .catch((error) => {
            console.error('Error updating user roles:', error);
          });
      };
      
    return (
        <div>
            {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">All User </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className='hidden md:inline'></th>
        <th className='hidden md:inline'>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
    
    {userData.map((ListUser,index) => (
            <tr key={ListUser._id}>
            <th className='hidden md:inline'>{index+1}</th>
            <td className='hidden md:inline'>{ListUser?.name}</td>
            <td>{ListUser?.email}</td>
            <td>
                    {ListUser?.role === "admin" ? (
                      <p className="text-black bg-gray-100 btn" disabled>
                       {ListUser.role}
                      </p>
                    ) : (
                     
                        <p  onClick={() => handleAdmin(ListUser)} className="text-black bg-gray-100 btn " >Make Admin</p>
                      
                    )}
                  </td>
            <td>
            

{
  
     
      <div key={user._id}>
      {user.email === "cse_2012020090@lus.ac.bd" ? (
  <p  className="text-white bg-red-500 btn" onClick={() => handleRemoveAdmin(ListUser)}>
  Remove Admin
  </p>
) : (
 
    <></>
  
)}
  </div>

  }
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