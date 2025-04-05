import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";
import { useDarkMode } from "../hooks/useDarkMode";

function NotFound() {
  useDarkMode();
  const navigate = useNavigate();
  const handleBackHome = () => navigate("/", { replace: true });
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center h-screen justify-center bg-secondary-100 text-secondary-900">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <h1 className="text-[10rem] text-center font-bold">404</h1>
        <h2 className="text-xl font-bold text-secondary-500 mb-4">
          صفحه ای که دنبالش بودید پیدا نشد !
        </h2>
        <div className=" flex gap-x-4">
          <button
            onClick={moveBack}
            className="btn btn--secondary text-center hover:bg-secondary-500 transition-all duration-300"
          >
            برگشت
          </button>
          <button
            onClick={handleBackHome}
            className="btn btn--outline text-center hover:bg-secondary-200 transition-all duration-300"
          >
            خانه
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
