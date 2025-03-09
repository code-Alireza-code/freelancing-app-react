import { useNavigate } from "react-router-dom";

function NotAccess() {
  const navigate = useNavigate();
  const handleBackHome = () => navigate("/", { replace: true });

  return (
    <div className="flex items-center h-screen justify-center bg">
      <div className="max-w-sm flex flex-col items-center justify-center">
        <h1 className="text-[10rem] text-center font-bold">403</h1>
        <h2 className="text-xl font-bold text-secondary-500 mb-4">
          شما به این صفحه دسترسی ندارید !
        </h2>

        <button
          onClick={handleBackHome}
          className="btn btn--outline text-center hover:bg-secondary-200 transition-all duration-300"
        >
          خانه
        </button>
      </div>
    </div>
  );
}

export default NotAccess;
