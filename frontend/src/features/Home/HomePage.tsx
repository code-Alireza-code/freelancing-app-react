import { useNavigate } from "react-router-dom";
import Header from "../../ui/Header";
import { useAuthorize, useUser } from "../authentication/useUser";

function HomePage() {
  const { isAuthenticated, isAuthorized } = useAuthorize();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen text-secondary-800 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <h1 className="text-5xl font-bold">اپلیکیشن فریلنسری</h1>
          <p>
            به راحتی پروژه های خود را ثبت کنید و از بین درخواست های فریلنسرها
            مناسب ترین را انتخاب کنید‌!
          </p>
          {isAuthenticated && isAuthorized ? (
            <button
              className="btn btn--primary"
              onClick={() =>
                navigate(`${user.role.toLocaleLowerCase()}/dashboard`)
              }
            >
              ورود به پنل
            </button>
          ) : (
            <button
              onClick={() => navigate("auth")}
              className="btn btn--primary"
            >
              ورود / ثبت نام
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
