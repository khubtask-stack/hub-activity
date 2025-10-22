import React from "react";
import "./khubStats.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ✅ Data
const statsData = {
  "K-Hub Stats": [
    {
      Year: "2022-23",
      "Total Students": 37,
      "Total Mentors": 1,
      "Final-Year Students": 24,
      "Third Year Students": 13,
      "Final Year Placed Students": 19,
    },
    {
      Year: "2023-24",
      "Total Students": 81,
      "Total Mentors": 9,
      "Final-Year Students": 45,
      "Third Year Students": 36,
      "Final Year Placed Students": 30,
    },
    {
      Year: "2024-25",
      "Total Students": 81,
      "Total Mentors": 9,
      "Final-Year Students": 45,
      "Third Year Students": 36,
      "Final Year Placed Students": 20,
    },
  ],
  "Campus and Program Stats": [
    {
      Year: "2022-23",
      "First Year Campus Visits": 120,
      "2nd Year FMML": { Registrations: 295, Certificates: 273 },
      "3rd Year Programs": { Total: 32 },
      "4th Year Internships": { Total: 48 },
    },
    {
      Year: "2023-24",
      "First Year Campus Visits": 120,
      "2nd Year FMML": { Registrations: 0, Certificates: 0 },
      "3rd Year Programs": { Total: 50 },
      "4th Year Internships": { Total: 50 },
    },
    {
      Year: "2024-25",
      "First Year Campus Visits": 150,
      "2nd Year FMML": { Registrations: 526, Certificates: 526 },
      "3rd Year Programs": { Total: 58 },
      "4th Year Internships": { Total: 49 },
    },
    {
      Year: "2025-26",
      "First Year Campus Visits": 150,
      "2nd Year FMML": { Registrations: 345, Certificates: 339 },
      "3rd Year Programs": { Total: 63 },
      "4th Year Internships": { Total: 54 },
    },
  ],
};

// ✅ StatCard Component
const StatCard = ({ title, value }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

// ✅ ChartCard Component
const ChartCard = ({ title, children }) => (
  <div className="chart-card">
    <h2>{title}</h2>
    <div className="chart-container">{children}</div>
  </div>
);

// ✅ App Component
function Stats() {
  const khub = statsData["K-Hub Stats"];
  const campus = statsData["Campus and Program Stats"];

  return (
    <div className="app khub-stats-app">
      <h1 className="app-title">📊 K-Hub Analytics Dashboard</h1>

      {/* K-Hub Stats */}
      <section>
        <h2 className="section-title">🧑‍🏫 K-Hub Statistics</h2>
        <div className="card-grid">
          <StatCard title="Latest Year" value={khub[khub.length - 1].Year} />
          <StatCard title="Total Students" value={khub[khub.length - 1]["Total Students"]} />
          <StatCard title="Total Mentors" value={khub[khub.length - 1]["Total Mentors"]} />
          <StatCard title="Final Year Students" value={khub[khub.length - 1]["Final-Year Students"]} />
          <StatCard title="Placed Students" value={khub[khub.length - 1]["Final Year Placed Students"]} />
        </div>
      </section>

      {/* K-Hub Bar Chart */}
      <ChartCard title="Total Students, Mentors, and Placed Students by Year">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={khub}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total Students" fill="#4f46e5" />
            <Bar dataKey="Total Mentors" fill="#10b981" />
            <Bar dataKey="Final Year Placed Students" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Placement Line Chart */}
      <ChartCard title="Placement Trends">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={khub}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Final-Year Students" stroke="#1d4ed8" strokeWidth={3} />
            <Line type="monotone" dataKey="Final Year Placed Students" stroke="#dc2626" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Campus Stats */}
      <section>
        <h2 className="section-title">🏫 Campus & Program Statistics</h2>
        <div className="card-grid">
          <StatCard title="Latest Year" value={campus[campus.length - 1].Year} />
          <StatCard title="Campus Visits" value={campus[campus.length - 1]["First Year Campus Visits"]} />
          <StatCard
            title="FMML Certificates"
            value={campus[campus.length - 1]["2nd Year FMML"].Certificates}
          />
          <StatCard
            title="Total Internships"
            value={campus[campus.length - 1]["4th Year Internships"].Total}
          />
        </div>
      </section>

      {/* FMML Chart */}
      <ChartCard title="FMML Registrations & Certificates">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={campus.map((item) => ({
              Year: item.Year,
              Registrations: item["2nd Year FMML"].Registrations,
              Certificates: item["2nd Year FMML"].Certificates,
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Registrations" fill="#6366f1" />
            <Bar dataKey="Certificates" fill="#22d3ee" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Internship Line Chart */}
      <ChartCard title="3rd & 4th Year Programs Totals">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={campus.map((item) => ({
              Year: item.Year,
              "3rd Year Programs": item["3rd Year Programs"].Total,
              "4th Year Internships": item["4th Year Internships"].Total,
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="3rd Year Programs" stroke="#16a34a" strokeWidth={3} />
            <Line type="monotone" dataKey="4th Year Internships" stroke="#e11d48" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

export default Stats;
