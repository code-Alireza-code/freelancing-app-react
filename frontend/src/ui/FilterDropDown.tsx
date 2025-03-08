import { useSearchParams } from "react-router-dom";
import { CategoryType } from "../types/categories";

type FilterDropDownPropsType = {
  options: CategoryType[];
  filterField: string;
  defaultOption: { value: string; label: string };
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
      <option value={defaultOption.value}>{defaultOption.label}</option>
      {options?.map((item) => (
        <option key={item._id} value={item.englishTitle}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
