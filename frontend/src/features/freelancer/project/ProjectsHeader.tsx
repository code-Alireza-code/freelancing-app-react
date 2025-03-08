import { useGetAllCategories } from "../../../hooks/useCategories";
import { CategoryType } from "../../../types/categories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    label: "مرتب سازی (جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { categories } = useGetAllCategories();

  const reformedCategories = (categories as CategoryType[])?.map((c) => {
    return {
      label: c.title,
      value: c.englishTitle,
    };
  });

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1>لیست پروژه ها</h1>
      <div className="flex gap-x-6">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={reformedCategories}
          defaultOption={{ value: "ALL", label: "دسته بندی (همه)" }}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
