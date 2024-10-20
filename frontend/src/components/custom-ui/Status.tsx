import { Check, X } from "lucide-react";
import { BsExclamationLg } from "react-icons/bs";

const SafeStatus: React.FC = (): React.ReactNode => {
  return (
    <div className="bg-safe-green flex aspect-square w-36 items-center justify-center rounded-full border-8 border-text-primary">
      <div className="flex h-1/2 w-1/2 items-center justify-center rounded-full bg-text-primary">
        <Check className=" text-safe-green" size={34} strokeWidth={5} />
      </div>
    </div>
  );
};

const WarningStatus: React.FC = (): React.ReactNode => {
  return (
    <div className="bg-pale-yellow border-orange-warning flex aspect-square w-36 items-center justify-center rounded-full border-8">
      <div className="bg-orange-warning flex h-1/2 w-1/2 items-center justify-center rounded-full">
        <BsExclamationLg
          strokeWidth={1}
          size={50}
          className="text-pale-yellow"
        />
      </div>
    </div>
  );
};

const DangerStatus: React.FC = (): React.ReactNode => {
  return (
    <div className="bg-danger-red border-dark-brown flex aspect-square w-36 items-center justify-center rounded-full border-8">
      <div className="bg-dark-brown flex h-1/2 w-1/2 items-center justify-center rounded-full">
        <X className="text-danger-red" size={34} strokeWidth={5} />
      </div>
    </div>
  );
};

export { SafeStatus, WarningStatus, DangerStatus };
