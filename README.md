# Cognitive Skills Dashboard

Interactive dashboard visualizing student cognitive skill data and performance using Next.js, Recharts, and Tailwind CSS.

---

## 🚀 Project Overview

This project analyzes cognitive skills data (comprehension, attention, focus, retention, engagement time) for 300 synthetic students across multiple classes. It implements:

- Data exploration and correlation analysis
- Clustering students into personas based on learning patterns
- Prediction of assessment scores using cognitive features
- Interactive Next.js dashboard with:
  - Overview statistics
  - Bar chart of average skills by class
  - Attention vs performance scatter plot
  - Radar charts for individual student profiles
  - Searchable and sortable student table

---

## 🛠 Setup & Installation

1. Clone the repository:

git clone <your-repo-url>
cd student-dashboard


2. Install dependencies:

npm install



3. Run the development server:

npm run dev


4. Open your browser at [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## 📁 Project Structure

student-dashboard/
├─ public/
│ └─ data/
│ └─ students_with_personas.json # Dataset file
├─ pages/
│ └─ index.js # Main dashboard page
├─ components/ # React components for stats and charts
│ ├─ OverviewStats.js
│ ├─ SkillBarChart.js
│ ├─ AttentionScatter.js
│ ├─ RadarProfile.js
│ └─ StudentTable.js
├─ styles/
│ └─ globals.css # Tailwind and global styles
├─ tailwind.config.js
├─ package.json


---

## 🔍 Key Insights

- Attention and focus are strong predictors of assessment performance.
- Students cluster into three personas reflecting performance levels and learning behaviors.
- Classes differ in average cognitive skills and assessment scores.
- Targeted interventions focusing on improving attention and focus could boost overall student outcomes.

---

## 🌐 Deployment

This project can be deployed on [Vercel](https://vercel.com/) for live sharing.

- Connect your GitHub repository to Vercel.
- Deploy using the default Next.js settings.
- Share the generated public URL for access.

---

## 🤝 Contributing

Contributions and improvements are welcome. Please open issues or pull requests for enhancements or bug fixes.

---

## 📝 License

This project is licensed under the MIT License.

---

© 2025 Thasmaishree R . All rights reserved.
