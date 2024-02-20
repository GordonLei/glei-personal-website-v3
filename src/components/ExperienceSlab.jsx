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
      {/* MAIN Column */}
      <div className="w">
        <p className="font-bold text-lg">
          {jobTitle} @ {company}
        </p>

        <div className="text-md justify-self-end">{years}</div>

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
