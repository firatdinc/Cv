import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              Hepsi
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-yazilim")}`}
              onClick={handleFilterKeyChange("f-yazilim")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-yazilim" />
              Gömülü Yazılım
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-web")}`}
              onClick={handleFilterKeyChange("f-web")}
              data-text="Music"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-web" />
              Web Tasarım
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/altug.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/altug_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Altuğ Yeniay</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/bircev.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/bircev_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">BirÇev</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/cyber.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/cyber_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Cyber Bilişim</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/guzellik.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/guzellik_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Etlik Su Güzellik Salonu</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/klinisyen.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/klinisyen_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Klinisyen Kitap Evi</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/onsports.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/onsports_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">On Sports Center</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-web">
          <div className="image">
            <a
              href="images/web/sibel.png"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/sibel_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Sibel Sarıkaya</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-yazilim">
          <div className="image">
            <a
              href="#section-portfolio"
              className="has-popup-image hover-animated"
            >
              <picture>
                <img src="images/web/seniorjs_home.png" alt="" />
              </picture>
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="desc">
                      <span className="name">Çok Yakında</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
