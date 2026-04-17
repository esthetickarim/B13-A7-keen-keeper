import { useTimeline } from "../context/TimelineContext";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function Stats() {

  const { timeline } = useTimeline();

  // Count interaction types
  const counts = {
    call: timeline.filter(e => e.type === "call").length,
    text: timeline.filter(e => e.type === "text").length,
    video: timeline.filter(e => e.type === "video").length
  };

  // Chart Data
  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video }
  ];

  // Figma-style Colors
  const COLORS = [
    "#8B5CF6", // Purple (Text)
    "#1F6F5C", // Dark Green (Call)
    "#22C55E"  // Green (Video)
  ];

  return (

    <div className="max-w-5xl mx-auto mt-10 px-4">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">
        Friendship Analytics
      </h1>

      {/* Chart Card */}
      <div className="bg-white shadow-md rounded-xl p-6">

        {/* Section Label */}
        <p className="text-sm text-gray-500 mb-4">
          By Interaction Type
        </p>

        {/* Chart Area */}
        <div className="w-full h-80">

          {timeline.length === 0 ? (

            <div className="flex items-center justify-center h-full text-gray-400">
              No interaction data yet.
            </div>

          ) : (

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}   // ⭐ Donut style
                  outerRadius={110}
                  paddingAngle={5}
                >

                  {data.map((entry, index) => (

                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>

            </ResponsiveContainer>

          )}

        </div>

      </div>

    </div>

  );
}