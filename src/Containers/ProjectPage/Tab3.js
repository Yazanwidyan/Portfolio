import React from "react";

import ProjectDetails from "../../Components/Projects/ProjectDetails";

const Tab3 = () => {
  return (
    <>
      <ProjectDetails
        NO={1}
        title={"Tab3"}
        desc={"Application for sales representatives"}
        context={"application Development"}
        Period={"end 2020"}
        PrimaryColor={"#35275B"}
        Introduction={
          "Tab3 is an application for sales representatives and provides him with a wide range of important features that help him to perform the tasks required of him during field work, and at the same time ensures his connection with the company on an ongoing basis to know his movements and operations, which ensures the follow-up of performance to the fullest."
        }
        about={
          "On this project I was responsible for Developing, structure, design the Project. also did the development process from scratch"
        }
        next={"erasmus"}
        href={"https://play.google.com/store/apps/details?id=com.ihr.tab3"}
      />
    </>
  );
};
export default Tab3;
