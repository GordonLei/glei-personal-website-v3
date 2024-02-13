import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function ContactChip({
  imageSrc = "",
  imageAlt = "",
  imageText = "",
  link = "",
  ...extras
}) {
  if (link !== "") {
    return (
      <Link href={link}>
        <Card
          isPressable
          onPress={() => {
            console.log("yep");
          }}
        >
          <CardBody>
            <div className="flex flex-row justify-center items-center space-x-2">
              <div className="">
                <img
                  alt={imageAlt}
                  src={imageSrc /* For some reason this src is not working*/}
                  fallbackSrc={imageSrc}
                  key={`${imageSrc}-${imageAlt}`}
                  className="object-scale-down h-8"
                />
              </div>

              <div className="text-blue-600">{imageText}</div>
            </div>
          </CardBody>
        </Card>
      </Link>
    );
  }

  return (
    <Card>
      <CardBody>
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="">
            <img
              alt={imageAlt}
              src={imageSrc /* For some reason this src is not working*/}
              fallbackSrc={imageSrc}
              key={`${imageSrc}-${imageAlt}`}
              className="object-scale-down h-8"
            />
          </div>

          <div>{imageText}</div>
        </div>
      </CardBody>
    </Card>
  );
}
