import React from "react";
import Carousel from "./Carousel";
import { Chip, Divider, Image, Link } from "@nextui-org/react";

export default function ProjectSlab({
  projectName = "",
  subheader = "",
  description = "",
  demoLink = "",
  githubLink = "",
  images = [],
  chips = [],
  ...extras
}) {
  return (
    <div className="p-4">
      <div className="flex flex-row max-w p-4">
        {/* Image Column */}
        <div className="w-1/3 mr-4">
          <Image
            alt={`${projectName}-image`}
            src={images[0]}
            className="border-2 border-sky-500"
          />
        </div>

        {/* MAIN Column */}
        <div className="w-2/3">
          <p>
            {githubLink !== "" || demoLink !== "" ? (
              <Link href={demoLink !== "" ? demoLink : githubLink}>
                <div className="text-md font-bold">{projectName} ↗</div>
              </Link>
            ) : (
              <div className="text-md font-bold">{projectName}</div>
            )}
          </p>
          <p>{description}</p>
          <div className="flex flex-row flex-wrap space-x-2">
            {chips.map((chipName) => {
              return (
                <Chip key={`${projectName}-${chipName}`} className="m-1">
                  {chipName}
                </Chip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
