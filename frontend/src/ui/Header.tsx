import UserAvatar from "../features/authentication/UserAvatar";
import { useUser } from "../features/authentication/useUser";

function Header() {
  const { isLoadingUser } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
      ${isLoadingUser && "blur-sm opacity-50"}
      `}
      >
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;
