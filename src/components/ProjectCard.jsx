import React from "react";
import Carousel from "./Carousel";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react";

export default function ProjectCard({
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
    <Card className="max-w-[400px]">
      {/*Card Header. Not using the NextUI one to make one use Grids*/}
      <div className="flex flex-col relative w-full p-3 flex-auto  place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
        <div className="grid grid-cols-2">
          <div className="text-md">{projectName}</div>
        </div>

        <p className="text-small text-default-500">{subheader}</p>
      </div>

      <Divider />
      <CardBody>
        <div className="mx-8 my-8">
          <Carousel
            key={`${projectName}-carousel}`}
            name={projectName}
            images={images}
          />
        </div>
        <p>{description}</p>
        <div className="grid grid-cols-2 py-2">
          <div className="text-md">
            {githubLink !== "" && (
              <Link href={githubLink}>
                <Button color="primary">GitHub Link</Button>
              </Link>
            )}
          </div>
          <div className="text-md justify-self-end">
            {demoLink !== "" && (
              <Link href="demoLink">
                <Button color="secondary">Demo Link</Button>
              </Link>
            )}
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-row flex-wrap space-x-2">
          {chips.map((chipName) => {
            return (
              <Chip key={`${projectName}-${chipName}`} className="m-1">
                {chipName}
              </Chip>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
