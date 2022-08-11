import React from "react";
import ProjectDetails from "../../Components/Projects/ProjectDetails";

const NewProject = () => {
  return (
    <>
      <ProjectDetails
        NO={5}
        title={"New project"}
        desc={"mssss"}
        context={" Website design & development"}
        Period={"end 2020"}
        PrimaryColor={"#775316"}
        Introduction={
          "WTM Monitor is a measure of website reliability, expressed as the percentage of time a website, has been working and available. Uptime is the opposite of downtime. Htop adds an exclamation mark when uptime is longer than 100 days It is often used as a measure of website reliability or stability, in that this time represents the time a website can be left unattended without crashing, or needing to be rebooted for administrative or maintenance purposes."
        }
        about={
          "On this project as a full-stack Developer, I was responsible of building the entire UI for the new website, redefining the User Experience and studying new interactions between the User and the Interface, also building the entire back-end using nestJS"
        }
        next={"layls"}
      />
    </>
  );
};
export default NewProject;
