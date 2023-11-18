const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-purple-700 text-white w-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <ul>
          <li className="mb-2 cursor-pointer hover:text-gray-300">Home</li>
          <li className="mb-2 cursor-pointer hover:text-gray-300">Profile</li>
          <li className="mb-2 cursor-pointer hover:text-gray-300">Settings</li>
          <li className="mb-2 cursor-pointer hover:text-gray-300">Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Total Users</h3>
            <p className="text-gray-700">256</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Revenue</h3>
            <p className="text-gray-700">$10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
