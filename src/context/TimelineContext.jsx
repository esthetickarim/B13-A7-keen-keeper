import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

  // ✅ Load saved timeline
  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem("timeline");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save timeline automatically
  useEffect(() => {
    localStorage.setItem(
      "timeline",
      JSON.stringify(timeline)
    );
  }, [timeline]);

  // ✅ Add entry
  const addEntry = (type, friendName) => {

    const newEntry = {
      id: Date.now(),
      type: type,
      name: friendName, // ⭐ IMPORTANT (matches Timeline.jsx)
      date: new Date().toLocaleDateString()
    };

    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addEntry
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);