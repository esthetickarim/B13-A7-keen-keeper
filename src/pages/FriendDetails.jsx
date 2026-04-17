import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find((f) => f.id === parseInt(id));

  const { addEntry } = useTimeline();

  if (!friend) {
    return <p className="text-center mt-10">Friend not found</p>;
  }

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type.toUpperCase()} logged with ${friend.name}`);
  };

  const statusColor = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-600",
    "on-track": "bg-green-100 text-green-600"
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 grid md:grid-cols-2 gap-6">

      {/* LEFT COLUMN */}
      <div className="bg-white shadow rounded-xl p-6 text-center">

        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-semibold mt-4">{friend.name}</h2>

        <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${statusColor[friend.status]}`}>
          {friend.status}
        </span>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {friend.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded">
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4">{friend.bio}</p>

        <p className="text-sm mt-2 text-gray-500">{friend.email}</p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 mt-6">
          <button className="bg-gray-100 py-2 rounded">⏰ Snooze 2 Weeks</button>
          <button className="bg-gray-100 py-2 rounded">📦 Archive</button>
          <button className="bg-red-100 text-red-600 py-2 rounded">🗑️ Delete</button>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Days Since</p>
            <h3 className="text-lg font-semibold">{friend.days_since_contact}</h3>
          </div>

          <div className="bg-white shadow rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Goal</p>
            <h3 className="text-lg font-semibold">{friend.goal} days</h3>
          </div>

          <div className="bg-white shadow rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500">Next Due</p>
            <h3 className="text-sm font-semibold">{friend.next_due_date}</h3>
          </div>
        </div>

        {/* Goal Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-2">Relationship Goal</h3>
          <p className="text-sm text-gray-600">
            Stay in touch every {friend.goal} days.
          </p>
          <button className="mt-3 text-sm text-green-600">Edit</button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-3">Quick Check-In</h3>

          <div className="flex gap-3">

            <button
              onClick={() => handleAction("call")}
              className="flex-1 bg-green-100 py-2 rounded"
            >
              📞 Call
            </button>

            <button
              onClick={() => handleAction("text")}
              className="flex-1 bg-blue-100 py-2 rounded"
            >
              💬 Text
            </button>

            <button
              onClick={() => handleAction("video")}
              className="flex-1 bg-purple-100 py-2 rounded"
            >
              🎥 Video
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default FriendDetails;