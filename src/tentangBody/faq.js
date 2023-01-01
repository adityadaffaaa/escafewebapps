import React, { useState } from "react";
const Faq = () => {
  const [clicked, setClick] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClick(null);
    }
    setClick(index);
  };
  let ClassName = ["fill-text2 transition-all ease-in-out duration-300"];
  ClassName.map((value) => {
    return value;
  });
  return (
    <div className="flex flex-col items-center mt-[60px] gap-6">
      <h1 className="text-heading1 text-secondary">FAQ</h1>
      <div className="flex flex-col gap-2">
        {faqkonten.map((items, index) => {
          // if (clicked === index) {
          //   ClassName.push("rotate-180");
          // }
          return (
            <div key={index} onClick={() => toggle(index)} className="flex flex-col">
              <div className="flex flex-row bg-primary py-[10px] px-6 rounded-[32px] items-center justify-between w-[675px] cursor-pointer">
                <p className="text-paragraph1 text-text2">{items.title}</p>
                {clicked === index ? (
                  ClassName.push("rotate-180") && (
                    <span className={ClassName.join(" ")}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                      </svg>
                    </span>
                  )
                ) : (
                  <span className={ClassName}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                    </svg>
                  </span>
                )}
              </div>
              {clicked === index ? (
                <div className="bg-background2 w-[675px] rounded-[16px] overflow-hidden px-6 py-6 transition-all ease-linear duration-200">
                  <p className="text-paragraph2 text-text2">{items.description}</p>
                </div>
              ) : (
                <div className="bg-background2 w-[675px] h-0 rounded-[16px] overflow-hidden px-6 py-0 transition-all ease-linear duration-200">
                  <p className="text-paragraph2 text-text2">{items.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

const faqkonten = [
  {
    title: "Bagaimana cara menjadi member ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.",
  },
  {
    title: "Bagaimana cara order menu ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.",
  },
  {
    title: "Bagaimana cara mendapatkan promo ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.",
  },
  {
    title: "Bisakah saya membayar pesanan dengan uang cash ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.",
  },
  {
    title: "Apa keutungan saya sebagai member Escafe ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel amet facilisi eleifend quisque rutrum a, urna. Morbi eu non dignissim gravida lacus. Scelerisque adipiscing bibendum faucibus varius velit.",
  },
];
