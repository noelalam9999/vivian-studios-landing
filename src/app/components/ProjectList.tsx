import React, { ReactNode } from "react";

type ProjectListProps = {
  children: ReactNode;
};

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
  return (
    <div>
      Projects
      {children}
    </div>
  );
};
export default ProjectList;
