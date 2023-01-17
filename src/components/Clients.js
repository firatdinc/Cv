const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Clients</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                  <picture>
                    <img src="images/client1.png" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                  <picture>
                    <img src="images/client3.png" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                  <picture>
                    <img src="images/client2.png" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                  <picture>
                    <img src="images/client4.png" alt="" />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
