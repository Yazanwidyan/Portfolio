import React from "react";
import ProjectDetails from "../../Components/Projects/ProjectDetails";

const Layls = () => {
  return (
    <>
      <ProjectDetails
        NO={4}
        title={"Layls Website"}
        desc={"Dresses E-commerce Website"}
        context={"Website design & development"}
        Period={"2021"}
        PrimaryColor={"#69121f"}
        Introduction={
          "Store (Layls) represents one of the leading platforms in the field of dresses where the store is divided into two parts, one of them represents the link between customers and sellers, through electronic display and control panels that allow the seller to display and market his products to reach the largest possible number of sellers"
        }
        about={
          "On this project as a Front-end Developer, I was responsible of building the entire UI for the new website, redefining the User Experience and studying new interactions between the User and the Interface, also added the Arabic version"
        }
        next={"tab3"}
        href={"https://layls.com/home"}
        source={"https://github.com/QaysTrad/layls-WebSite"}
      />
    </>
  );
};
export default Layls;
