import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">German</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Yazılım Tasarım Bilgileri</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">WordPress - Opencart</div>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">HTML</div>
              <div className="progress p90">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">CSS</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">JS</div>
              <div className="progress p75">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">75%</span>
                </div>
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Next.js</div>
              <div className="progress p65">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">65%</span>
                </div>
                <span>65%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">React JS</div>
              <div className="progress p60">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">60%</span>
                </div>
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop Illustrator</div>
              <div className="progress p60">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">60%</span>
                </div>
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Office Programs</div>
              <div className="progress p60">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">60%</span>
                </div>
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">PHP</div>
              <div className="progress p45">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">45%</span>
                </div>
                <span>45%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Typescript</div>
              <div className="progress p40">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">40%</span>
                </div>
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Figma</div>
              <div className="progress p25">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">25%</span>
                </div>
                <span>25%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">ASP.NET</div>
              <div className="progress p15">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">15%</span>
                </div>
                <span>15%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">iOS and android apps</div>
            </li>
            <li>
              <div className="name">Create logo design</div>
            </li>
            <li>
              <div className="name">Design for print</div>
            </li>
            <li>
              <div className="name">Modern and mobile-ready</div>
            </li>
            <li>
              <div className="name">Advertising services include</div>
            </li>
            <li>
              <div className="name">Graphics and animations</div>
            </li>
            <li>
              <div className="name">Search engine marketing</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
