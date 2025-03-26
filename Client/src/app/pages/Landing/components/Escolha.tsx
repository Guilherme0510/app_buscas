import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Escolha = () => {
  return (
    <section id="recursos" className="landing-escolha">
      <div className="container">
        <div>
          <h2 className="text-white text-center py-4">Por que Escolher a G Maps</h2>
        </div>
        <div className="row">
          <div className="col-md-6 escolha-img">
            <img
              src={require("../images/map_dot.png")}
              width={"50%"}
              alt=""
            />
          </div>
          <div className="col-md-6 section-escolha">
            <div className="justify-content-between card-escolha">
              <img src={require('../images/icon1.png')} alt="" width='20%'  />
              <p>
                Soluções adaptadas especificamente às necessidades do seu
                negócio
              </p>
            </div>
            <div className="justify-content-between card-escolha">
              <img src={require('../images/icon2.png')} alt="" width='20%' />
              <p>
                Soluções adaptadas especificamente às necessidades do seu
                negócio
              </p>
            </div>
            <div className="justify-content-between card-escolha">
              <img src={require('../images/icon3.png')} alt=""  width='20%' />
              <p>
                Soluções adaptadas especificamente às necessidades do seu
                negócio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
