import React from "react";
import OrganizationDashboardComponent from "./Dashboard";

const Dashboard = ({
  params,
}: {
  params: Promise<{ orgName: string; projectId: string }>;
}) => {
  const resolvedParams = React.use(params);
  return <OrganizationDashboardComponent orgId={resolvedParams.orgName} />;
};

export default Dashboard;
