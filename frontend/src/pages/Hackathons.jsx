import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "AI-Based Attendance", desc: "Smart attendance using face recognition." },
  { title: "E-Book Platform", desc: "Secure digital book sharing." },
];

export default function ProjectNest() {
  return (
    <div className="project-nest-page">
      <h2>Project Nest</h2>
      <p>Showcasing completed projects from our Nest initiative.</p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} />
        ))}
      </div>
    </div>
  );
}
