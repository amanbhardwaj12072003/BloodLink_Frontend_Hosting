import React from "react";
import cc from "../../assets/cc.png";

const Contact = () => {
  const data = [
    {
      title: "BloodLink related queries, feedback and suggestions",
      body: [
        "Indian Institute Of Technology Dhanbad",
        "Police Line Road, Main Campus IIT (ISM), near Rani Bandh, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004",
        "Contact: 7014068439",
        "Institute Mail: 21je0081[at]iitism[dot]ac[dot]in",
        "Personal Mail: amanbhardwaj12072003[at]gmail[dot]com"
      ],
    },
    {
      title: "For Administrative queries",
      body: [
        "Blood Cell, National Health Mission",
        "Ministry of Health & Family Welfare,New Delhi - 110011",
      ],
    },
  ];
  return (
    <div className="px-64">
      <br />
      <h1 className="text-center text-3xl font-bold">Contact Details</h1>
      <br />
      <div className="flex justify-around">
        <div>
          {data.map((e) => {
            return (
              <>
                <p className="text-xl font-bold underline">{e.title}</p>
                <br />
                <code>
                  {e.body.map((k) => {
                    // return <p className="text-md">{k}</p>;
                    return (
                        <ul className="text-md">{k}</ul>
                    )
                  })}
                </code>
                <br />
              </>
            );
          })}
        </div>
        <div>
          <img src={cc} draggable={false} width="90%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
