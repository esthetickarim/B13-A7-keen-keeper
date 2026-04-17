# Keen Keeper – Friendship Management App

#Project Description
Keen Keeper is a modern friendship management web application built with React. It helps users track interactions with friends, manage relationship goals, and visualize engagement through analytics like timelines and charts.

The app is designed based on a Figma UI and focuses on maintaining meaningful relationships through structured reminders and interaction tracking.

---

# Live Demo
> Add your deployed link here (Vercel / Netlify)

---

# Technologies Used
- React.js
- React Router DOM
- Tailwind CSS
- Recharts
- Context API
- Vite

---

# Key Features

#1. Responsive Navbar
- Logo on the left side
- Navigation links: Home, Timeline, Stats
- Active route highlighting
- Icons beside each navigation link
- Fully responsive design

---

#2. Home Page Banner
- Centered title and subtitle
- “Add a Friend” button with icon
- 4 summary/stat cards below banner
- Matches Figma design layout

---

# 3. Friends Management System
- Friends data stored in a JSON file
- Displays 6–10 realistic friend profiles
- Each friend includes:
  - Profile picture
  - Name
  - Email
  - Tags
  - Status (overdue / almost due / on-track)
  - Days since last contact
  - Bio and goal tracking

- 4-column responsive grid layout
- Clickable cards leading to Friend Details page

---

#4. Friend Details Page
Two-column layout:

#Left Section:
- Profile picture
- Name and status
- Tags and bio
- Email address
- Action buttons:
  - Snooze 2 Weeks
  - Archive
  - Delete

#Right Section:
- Stats cards (Days Since Contact, Goal, Next Due Date)
- Relationship goal card with edit option
- Quick Check-in buttons:
  - Call 📞
  - Text 💬
  - Video 🎥

---

# 5. Interaction System (Timeline Logging)
- Clicking Call / Text / Video:
  - Adds a timeline entry automatically
  - Includes:
    - Date
    - Interaction type
    - Friend name
  - Shows toast notification on every action

---

#6. Timeline Page
- Displays all interaction history
- Shows:
  - Date
  - Icon (Call/Text/Video)
  - Title of interaction
- Includes filter system:
  - Filter by Call
  - Filter by Text
  - Filter by Video

---

#7. Friendship Analytics (Stats Page)
- “Friendship Analytics” heading
- Pie chart using Recharts
- Visual breakdown of:
  - Calls
  - Texts
  - Video interactions

---

# 8. Footer
- Fully responsive footer
- Matches Figma design
- Clean and minimal layout

---

# 9. Responsive Design
- Mobile-friendly
- Tablet optimized
- Desktop fully responsive

---

#10. Additional Features
- Loading animation while fetching data
- 404 Not Found page for invalid routes
- Toast notifications for interactions
- Refresh-safe routing (no errors on reload)

---

#Optional Features (Bonus)
- Sort timeline (newest / oldest)
- Search timeline by name or interaction type

---

#Installation & Setup

```bash
git clone https://github.com/your-username/keen-keeper.git
cd keen-keeper
npm install
npm run dev
