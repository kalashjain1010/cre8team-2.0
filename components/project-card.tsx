import {
  ProjectWithApplicantsWithRequirementsWithTech,
  ProjectWithUserWithRequirementsWithTech,
} from "@/type";
import React from "react";
import { Button } from "./ui/button";
import { useProjectPageCard } from "@/hooks/useCard";
import Image from "next/image";

export default function ProjectCard({
  project,
}: {
  project: ProjectWithUserWithRequirementsWithTech;
}) {
  const { setOpen } = useProjectPageCard();

  // Truncate description to 300 words and add "..." if it's longer
  const truncatedDescription =
    project.description.length > 300
      ? project.description.slice(0, 300) + "..."
      : project.description;

  return (
    <div className="rounded-[20px] border border-[#ECECEC] hover:bg-[#F4FAFF] transition py-6 px-5 flex flex-col h-[320px]">
      {/* Title */}
      <h2 className="text-[20px] font-semibold leading-[28px] cursor-pointer uppercase">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-[#747474] text-[12px] leading-[16px] flex-grow">
        {truncatedDescription}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-x-[10px]">
        {project.techs.map((tech) => (
          <div
            key={tech.id}
            className="flex px-[10px] py-[5px] text-[#49A8FF] rounded-[50px] bg-[#49A8FF21] text-[12px] font-medium mb-2"
          >
            {tech.name}
          </div>
        ))}
      </div>

      {/* User Profile and Interested Button */}
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <Image
            src={project.user.imageUrl || '/public/user.png'}
            alt="user image"
            className="rounded-full"
            width={43}
            height={43}
          />
          <p className="text-[16px] font-semibold">{project.user.name}</p>
        </div>
        <Button className="text-white bg-[#014DA1] text-[16px] font-semibold hover:bg-[#014DA1] w-[149px] h-full hover:opacity-80 transition">
          Interested
        </Button>
      </div>
    </div>
  );
}
