import { UserPlus } from "lucide-react";
import friends from "../data/friends.json";
import FriendCard from "../components/FriendCard";

const Home = () => {
  return (
    <div className="bg-[#f5f7fa] py-12 px-4">
      
      {/* 🔹 Banner */}
      <div className="text-center max-w-3xl mx-auto">
        
        <h1 className="text-[28px] md:text-[32px] font-semibold text-gray-800 leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-[13px] text-gray-500 mt-3">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="mt-5 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-[13px] px-4 py-2 rounded-md shadow-sm transition">
          <UserPlus size={14} />
          Add a Friend
        </button>
      </div>

      {/* 🔹 Summary Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        
        <div className="bg-white border border-gray-200 rounded-lg py-6 text-center shadow-sm">
          <h2 className="text-[22px] font-semibold text-gray-800">10</h2>
          <p className="text-[13px] text-gray-500 mt-1">Total Friends</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg py-6 text-center shadow-sm">
          <h2 className="text-[22px] font-semibold text-gray-800">3</h2>
          <p className="text-[13px] text-gray-500 mt-1">On Track</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg py-6 text-center shadow-sm">
          <h2 className="text-[22px] font-semibold text-gray-800">6</h2>
          <p className="text-[13px] text-gray-500 mt-1">Need Attention</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg py-6 text-center shadow-sm">
          <h2 className="text-[22px] font-semibold text-gray-800">12</h2>
          <p className="text-[13px] text-gray-500 mt-1">
            Interactions This Month
          </p>
        </div>
      </div>

      {/* 🔹 Friends Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;