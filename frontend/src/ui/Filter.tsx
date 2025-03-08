import { useSearchParams } from "react-router-dom";

type FilterPropsType = {
  options: {
    label: string;
    value: string;
  }[];
  filterField: string;
  defaultOption?: { value: string; label: string };
};

function Filter({ filterField, options }: FilterPropsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleChangeStatus = (value: string) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 p-1 rounded-lg">
        {options.map((item) => (
          <button
            className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300 ease-in-out bg-secondary-0 text-secondary-800 ${
              currentFilter === item.value &&
              "bg-primary-900 text-white disabled:bg-primary-900 disabled:text-white"
            }`}
            disabled={currentFilter === item.value}
            key={item.value}
            onClick={() => handleChangeStatus(item.value)}
            value={item.value}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
