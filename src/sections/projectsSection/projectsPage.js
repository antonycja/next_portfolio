"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card/card";
import "./projectsPage.css";
import Modal from "@/components/modal/modal";

export default function ProjectsPage({ projects }) {
    // Track the index of the currently open card
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

    useEffect(() => {
        if (selectedProjectIndex !== null) {
            document.body.style.overflow = "hidden";
        } else document.body.style.overflow = "scroll";
        return () => {};
    }, [selectedProjectIndex]);

    const togglePopover = (index) => {
        // Toggle the modal only for the clicked card
        setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
    };

    return (
        <div className="card-list">
            {projects.map((project, index) => (
                <div className="card-item" key={index}>
                    {selectedProjectIndex === index && (
                        <Modal
                            setState={() => setSelectedProjectIndex(null)}
                            projectsData={project} // Pass the correct project data
                        />
                    )}
                    <Card onClick={() => togglePopover(index)} projectData={project} />
                </div>
            ))}
        </div>
    );
}
