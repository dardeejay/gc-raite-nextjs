import manrope from "@/fonts/Manrope";
import poppins from "@/fonts/Poppins";
import React from "react";
import { twMerge } from "tailwind-merge";

type StatusDescriptionProps = {
  StatusIcon: React.FC;
  statusTitle: string;
  statusDescription: string;
};

const StatusDescription: React.FC<StatusDescriptionProps> = ({
  StatusIcon,
  statusTitle,
  statusDescription,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <StatusIcon />
      <h1
        className={twMerge(
          poppins.className,
          " my-5 text-4xl font-semibold text-text-primary",
        )}
      >
        {statusTitle}
      </h1>
      <pre
        className={twMerge(
          manrope.className,
          " text-lg font-medium text-text-muted",
        )}
      >
        {statusDescription}
      </pre>
    </div>
  );
};

export default StatusDescription;
