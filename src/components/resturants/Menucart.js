import React from "react";

const Menucart = ({ Data }) => {
  //   console.log(Data);
  const obj = { color: "blue" };
  return (
    <>
      <section className="main">
        {Data.map((curEle) => {
          return (
            <>
              <div className="card-container" key={curEle.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-num" style={obj}>
                    {curEle.id}
                    </span>
                    <span className="card-author" style={{ color: "red" }}>
                    {curEle.category}
                    </span>
                    <h2 className="card-title">{curEle.name}</h2>
                    <span className="card-price">{curEle.price}</span><br />
                    <span className="card-description">
                    {curEle.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div><br />
                  <img src={curEle.image} alt="" className="card-image" />
                  <span className="card-tag">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default Menucart;
