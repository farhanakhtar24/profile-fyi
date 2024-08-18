import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import NotFoundPNG from "/public/error-500_f9bbb4.png";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Card className="flex h-[78vh] w-full flex-col items-center justify-center gap-5">
      <Image src={NotFoundPNG.src} width={300} height={300} alt="Not Found" />
      Unfortunately the page you are looking for has been moved or deleted.
    </Card>
  );
};

export default NotFound;
