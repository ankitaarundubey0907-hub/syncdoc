function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            H
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Hetvi Shah
          </h1>

          <p className="text-gray-500">
            hetvi@gmail.com
          </p>

        </div>

        <div className="mt-10 space-y-4">

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>

          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
            Change Password
          </button>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;