import { twMerge } from "tailwind-merge";
import poppins from "@/fonts/Poppins";
interface CustomButtonProps {
  children?: React.ReactNode | React.ReactNode[] | string;
  className?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "rounded-lg border border-text-primary bg-btn-primary px-4 py-2 text-sm font-medium text-text-primary",
        className,
        poppins.className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
