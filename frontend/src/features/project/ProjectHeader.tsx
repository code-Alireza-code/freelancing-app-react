import { IoMdArrowRoundForward } from "react-icons/io";
import useMoveBack from "../../hooks/useMoveBack";
import { ProjectType } from "../../types/projects";

type ProjectHeaderPropsType = {
  projectTitle: Pick<ProjectType, "title">["title"];
};

function ProjectHeader({ projectTitle }: ProjectHeaderPropsType) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <IoMdArrowRoundForward className="size-5 text-secondary-500" />
      </button>
      <h1 className="font-semibold">لیست درخواست های {projectTitle}</h1>
    </div>
  );
}

export default ProjectHeader;
