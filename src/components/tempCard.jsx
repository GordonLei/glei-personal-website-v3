// NextCard.tsx
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";

export default function TempCard() {
  const [count, setCount] = useState(0);
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">ZAM</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Button color="primary" onClick={() => setCount(count + 1)}>
          Button
        </Button>
        <p>Count: {count}</p>
      </CardBody>
    </Card>
  );
}
