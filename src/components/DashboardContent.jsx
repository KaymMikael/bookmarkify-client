import React from "react";
import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";

const DashboardContent = () => {
  return (
    <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
      <div className="max-w-4xl mx-auto">
        <DashboardHead />
        <DashboardBody />
      </div>
    </div>
  );
};

export default DashboardContent;
