"use client";

import ProjectCard from "@/components/project-card";
import { ProjectWithUserWithRequirementsWithTech } from "@/type";
import { Plus } from "lucide-react";
import React from "react";

interface ProjectClientProps {
  projects: ProjectWithUserWithRequirementsWithTech[];
}

const ProjectClient: React.FC<ProjectClientProps> = ({ projects }) => {
  const NoProjectCreated = () => {
    return (
      <p className="flex items-center text-muted-foreground justify-center h-[50vh]">
        You have not created any post click on{" "}
        <span className="flex items-center bg-muted px-2 py-1 mx-1 rounded-lg">
          <Plus className="h-4 w-4" /> add post{" "}
        </span>
        to create a new one
      </p>
    );
  };
  const ShowProjects = () => {
    return (
      <div className="mt-6 p-3 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[40px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className=" border-solid border-2 border-gray-100 h-[100%] md:h-full mt-4 rounded-3xl">
        {projects.length === 0 ? <NoProjectCreated /> : <ShowProjects />}
      </div>
    </div>
  );
};
export default ProjectClient;
