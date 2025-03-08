import { useGetAllCategories } from "../../../hooks/useCategories";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { categories } = useGetAllCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1>لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          filterField="category"
          options={categories}
          defaultOption={{ value: "ALL", label: "دسته بندی (همه)" }}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
