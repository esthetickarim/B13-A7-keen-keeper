import { Link } from "react-router-dom";

const statusColors = {
  "overdue": "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600"
};

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-sm border p-5 text-center hover:shadow-md transition">
        
        {/* Image */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />

        {/* Name */}
        <h2 className="mt-3 text-[15px] font-semibold text-gray-800">
          {friend.name}
        </h2>

        {/* Days */}
        <p className="text-[12px] text-gray-500 mt-1">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-600"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-3">
          <span
            className={`text-[11px] px-3 py-1 rounded-full ${statusColors[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default FriendCard;