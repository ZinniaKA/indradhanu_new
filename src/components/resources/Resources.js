import React from "react";
import "./Resources.css";
import legs from "../../assets/images/legs.png";

function Resources() {
  return (
    <div className="resources" id="resources">
      <h2>resources</h2>
      <div className="resources-inner">
        <div className="resource-art">
          <img src={legs} alt="Legs" />
          <div className="resources-art-underline"></div>
        </div>
        <div className="resources-info">
          <div className="resources-info-inner">
          <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXBEdXlquU5R23-si4LR6BuB04Rp5_A5kcaugFxAyTYrtgRA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2025 - Inaugral Ceremony
              </a>
            </p>

            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpcohuEIfa-0VH-N604elanHbePeKgFj8hea7SRrzX_s1b3Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2025 - All India Queer Collective Conference
              </a>
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdo3MpNqyDQZLLKZm4ZsSsp3xhUTkFsMBSNzhiFM2H8svNTIA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2025 - Queer's Got Talent'
              </a>
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdo3MpNqyDQZLLKZm4ZsSsp3xhUTkFsMBSNzhiFM2H8svNTIA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                ViभिNN 2025 - Pride Parade RSVP
              </a>
            </p>
            <a
              href="https://linktr.ee/indradhanu_iitd/"
              id="resource-view-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
