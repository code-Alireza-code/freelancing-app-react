import { ReactNode } from "react";
import toast, { Toast } from "react-hot-toast";

type CustomToastPropsType = {
  label: ReactNode;
  buttonLabel: string;
  duration?: number;
};

function CustomToast({
  label,
  buttonLabel,
  duration = 10000,
}: CustomToastPropsType) {
  return toast.custom(
    (t: Toast) => (
      <div
        className={`
           ${
             t.visible ? "animate-enter" : "animate-leave"
           } max-w-md w-full p-3 bg-secondary-200 shadow-secondary-50 shadow-lg rounded-lg flex items-center justify-between`}
      >
        <div className="text-secondary-900 text-nowrap px-4">{label}</div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="pl-2 text-sm font-medium text-primary-900 hover:text-primary-700"
        >
          {buttonLabel}
        </button>
      </div>
    ),
    { duration }
  );
}

export default CustomToast;
