import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogoutUser } from "./useUser";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogoutUser();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={() => logout()}>
      <HiArrowRightOnRectangle className="size-5 text-secondary-500 hover:text-error cursor-pointer" />
    </button>
  );
}

export default Logout;
