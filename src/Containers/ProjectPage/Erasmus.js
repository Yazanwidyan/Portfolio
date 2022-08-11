import React from "react";
import ProjectDetails from "../../Components/Projects/ProjectDetails";

const Erasmus = () => {
  return (
    <>
      <ProjectDetails
        NO={2}
        title={"Erasmus+"}
        desc={"Student Exchange Program"}
        context={"Website design & development"}
        Period={"2020"}
        PrimaryColor={"#464A58"}
        Introduction={
          "Erasmus+ is the EU's programme to support education, training, youth and sport in Europe. Its budget of €14.7 billion will provide opportunities for over 4 million Europeans to study, train, and gain experience abroad. Set to last until 2020, Erasmus+ doesn't just have opportunities for students. Merging seven prior programmes, it has opportunities for a wide variety of individuals and organisations."
        }
        about={
          "On this project I was responsible for the initial UI/UX architecture, structure, design and animations. also did the development process from scratch"
        }
        next={"monitor"}
      />
    </>
  );
};
export default Erasmus;
