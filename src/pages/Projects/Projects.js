import React from "react";
import "./Projects.css";
import project from "../../assets/images/group-photo.png";
import "https://kit.fontawesome.com/8d85e3b30d.js";

const ProjectSection = () => (
  <div className="project-content">
          <h2> Gender Inclusive Restrooms for Trans/Queer Persons</h2>
          <p>
          Indradhanu has been working with IIT Delhi to address the lack of any gender inclusive restrooms for public use on the IIT Delhi campus. Indradhanu members drafted a proposal that provides basic recommendations regarding the rolling out of gender-inclusive restrooms on the campus with the necessary signage system. The suggestions comply the spirit of the NALSA vs Union of India 2014 Judgement, the Transgender Persons (Protection of Rights) Act 2019, Rights of Persons with Disabilities Act 2016, and the National Education Policy 2020. The proposal outlines an equity-centred rationale within a social justice framework to build single stalled gender-inclusive restrooms on the main campus. These changes are an important step towards making IIT Delhi an accessible campus for diverse gender and sexual minorities.</p>
          <img src={project} alt="Project"  />
          <p>
          Indradhanu in collaboration with IGES (Initiative for Gender Equity and Sensitization) carried out a restroom accessibility assessment of all the public use restrooms in 7 major segments of the campus – Lecture Hall Complex, the main building, the blocks I, II, III and IV, V, VI, Library, SAC and IIT Hospital to conclude the present gendered-classification and conditions of restrooms on the campus disproportionately impacts LGBTQIA+ persons. To put the findings into perspective only 1 out of the 7 segments had unisex washrooms.         
          </p>
          <div className="butn">          <a href="https://instagram.com/indradhanu.iitd" target="_blank" rel="noreferrer">
              Know More</a>
</div>
  </div>
);


const App = () => (
  <div>
    {/* <Header /> */}
    <ProjectSection />
    {/* Add other sections like Timeline and History here as components */}
  </div>
);

export default App;
