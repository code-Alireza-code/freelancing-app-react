import { useSearchParams } from "react-router-dom";

type FilterDropDownPropsType = {
  options: {
    label: string;
    value: string;
  }[];
  filterField: string;
  defaultOption?: { value: string; label: string };
};

function FilterDropDown({
  options,
  filterField,
  defaultOption,
}: FilterDropDownPropsType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select
      className="textField__input py-2 text-xs bg-secondary-0"
      value={value}
      onChange={handleChange}
    >
      {defaultOption && (
        <option value={defaultOption.value}>{defaultOption.label}</option>
      )}
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
