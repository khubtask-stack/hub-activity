import React, { useEffect, useState } from "react";
import "./khubProjects.css";
import khubImg from "../assets/khub_project.jpg";

export default function KhubProjects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        import("../data/khubProjects.json").then((module) => {
            setData(module.default);
        });
    }, []);

    return (
        <div className="khub-projects-container">
            <div className="khub-header">
                <img src={khubImg} alt="KHUB" className="khub-img" />
                <h1 className="main-title">Projects of Social Foundry @ KIET</h1>
            </div>
            {data.map((batch, i) => (
                <div key={i} className="batch-section">
                    <h2 className="batch-title">Batch - {batch.batch}</h2>
                    <div className="projects-grid">
                        {batch.projects.map((p, idx) => (
                            <div key={idx} className="project-card">
                                <div className="project-content">
                                    <h3 className="project-title">{p.title}</h3>
                                    <p className="project-description">{p.description}</p>
                                    {p.github ? (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="github-link"
                                        >
                                            View on GitHub →
                                        </a>
                                    ) : null}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}