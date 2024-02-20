import React from "react";
import { Card, CardBody, CardFooter, Chip, Divider } from "@nextui-org/react";

export default function ExperienceSlab({
  company = "",
  jobTitle = "",
  years = "",
  description = "",
  chips = [],
  ...extras
}) {
  return (
    <div className="flex flex-row max-w p-4">
      {/* Years Column */}
      <div className="w-1/3">
        <div className="text-md justify-self-end">{years}</div>
      </div>
      {/* MAIN Column */}
      <div className="w-2/3">
        <p className="font-bold text-lg">
          {jobTitle} @ {company}
        </p>

        <p className="my-4">{description}</p>

        <div>
          <div className="flex flex-row  flex-wrap space-x-2">
            {chips.map((chipName) => {
              return (
                <Chip key={`${company}-${chipName}`} className="m-1">
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
