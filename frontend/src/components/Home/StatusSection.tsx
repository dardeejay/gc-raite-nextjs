import { TRANSLATION } from "@/constants/translation";
import poppins from "@/fonts/Poppins";
import { twMerge } from "tailwind-merge";
import StatusDescription from "./StatusDescription";
import { SafeStatus } from "../custom-ui/Status";
import { STATUS_DESCRIPTION } from "@/constants/status-description";

const StatusSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <pre
        className={twMerge(
          poppins.className,
          " text-center text-4xl font-medium leading-relaxed text-text-primary",
        )}
      >
        {TRANSLATION.status_primary}
      </pre>
      <div className="mt-24 grid grid-cols-3 items-center justify-center">
        {STATUS_DESCRIPTION.map((status, index) => {
          return (
            <StatusDescription
              key={index}
              StatusIcon={status.StatusIcon}
              statusTitle={status.statusTitle}
              statusDescription={status.statusDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatusSection;
