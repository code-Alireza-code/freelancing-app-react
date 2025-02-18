import { useUser } from "../hooks/useUser";

function Header() {
  const { isPending } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
      ${isPending ? "blur-sm opacity-50" : ""}
      `}
      >
        app header
      </div>
    </div>
  );
}

export default Header;
