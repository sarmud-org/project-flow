import React from "react";
import ProjectDetail from "./ProjectDetail";

const ProjectDetails = ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const resolvedParams = React.use(params);

  return <ProjectDetail projectId={resolvedParams.projectId} />;
};

export default ProjectDetails;
