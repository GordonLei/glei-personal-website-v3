import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function ExperienceCard({
  company = "",
  jobTitle = "",
  years = "",
  description = "",
  chips = [],
  ...extras
}) {
  return (
    <Card className="max-w-[400px]">
      {/*Card Header. Not using the NextUI one to make one use Grids*/}
      <div className="flex flex-col relative w-full p-3 flex-auto  place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
        <div className="grid grid-cols-2">
          <div className="text-md">{company}</div>
          <div className="text-md justify-self-end">{years}</div>
        </div>

        <p className="text-small text-default-500">{jobTitle}</p>
      </div>

      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-row space-x-2">
          {chips.map((chipName) => {
            return <Chip id={`${company}-${chipName}`}>{chipName}</Chip>;
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
