import { Phone, MessageCircle, Video } from "lucide-react";
import { useTimeline } from "../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();

  const iconMap = {
    call: <Phone size={16} />,
    text: <MessageCircle size={16} />,
    video: <Video size={16} />
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">

      <h2 className="text-2xl font-semibold mb-6">Timeline</h2>

      {timeline.length === 0 ? (
        <p className="text-gray-500 text-sm">No interactions yet.</p>
      ) : (
        <div className="space-y-4">
          {timeline.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow-sm p-4 rounded-lg"
            >
              <div className="bg-gray-100 p-2 rounded-full">
                {iconMap[item.type]}
              </div>

              <div>
                <p className="text-sm font-medium">
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Timeline;