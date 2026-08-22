import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [editUsername, setEditUsername] = useState("");
const [editEmail, setEditEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {


        const response = await API.get("/auth/profile");
        setUser(response.data.user);
      } catch (error) {
        console.error("Profile error:", error);

        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);
const handleEditClick = () => {
  setEditUsername(user.username || "");
  setEditEmail(user.email || "");
  setShowEdit(true);
};
const handleUpdateProfile = async () => {
  try {
    const response = await API.put("/auth/profile", {
      username: editUsername,
      email: editEmail,
    });

    setUser(response.data.user);
    setShowEdit(false);

    alert("Profile updated successfully!");
  } catch (error) {
    console.error("Update profile error:", error);

    alert(
      error.response?.data?.message ||
      "Failed to update profile"
    );
  }
};
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500">Unable to load profile.</p>
      </div>
    );
  }

  const username = user.username || "User";
  const email = user.email || "";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            {username.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-3xl font-bold mt-5">{username}</h1>

          <p className="text-gray-500">{email}</p>
        </div>

        <div className="mt-10 space-y-4">
         <button
  onClick={handleEditClick}
  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
>
  Edit Profile
</button>
{showEdit && (
  <div className="mt-6 p-6 border rounded-lg bg-gray-50">
    <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
<input
  type="text"
  placeholder="Username"
  value={editUsername}
  onChange={(e) => setEditUsername(e.target.value)}
  className="w-full border p-3 rounded-lg mb-4"
/>

    <input
  type="email"
  placeholder="Email"
  value={editEmail}
  onChange={(e) => setEditEmail(e.target.value)}
  className="w-full border p-3 rounded-lg mb-4"
/>

    <div className="flex gap-3">
      <button
  onClick={handleUpdateProfile}
  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
>
  Save Changes
</button>

      <button
        type="button"
        onClick={() => setShowEdit(false)}
        className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  </div>
)}

          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
            Change Password
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
