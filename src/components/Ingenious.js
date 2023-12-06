import React, { useState, useEffect, useRef } from "react";
import vector from "../assets/Vector.svg";
import VectorDown from "../assets/VectorDown.svg";

const Ingenious = () => {
  const [isOpen, setIsOpen] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });

  const toggleRefs = {
    button1: useRef(null),
    button2: useRef(null),
    button3: useRef(null),
    button4: useRef(null),
  };

  useEffect(() => {
    const handleCLickOutside = (event, button) => {
      if (
        toggleRefs[button].current &&
        !toggleRefs[button].current.contains(event.target)
      ) {
        setIsOpen((prevState) => ({ ...prevState, [button]: false }));
      }
    };
    const addClickOutsideListeners = (button) => {
      document.addEventListener("mousedown", (event) =>
        handleCLickOutside(event, button)
      );
    };

    Object.keys(toggleRefs).forEach((button) => {
      addClickOutsideListeners(button);
    });

    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
    };
  }, []);

  const handleToggle = (button) => {
    setIsOpen((prevState) => ({ ...prevState, [button]: !prevState[button] }));
  };

  return (
    <div>
      {/* Ingenious */}
      <div>
        <h1 className=" font-medium text-xl text-[#656565] ml-3 mb-3">
          Ingenious
        </h1>
        <div className="relative">
          {isOpen.button1 ? (
            <div style={styles.dropdown}>
              <button
                style={styles.ingenious}
                ref={toggleRefs.button1}
                onClick={() => handleToggle("button1")}
              >
                <h2>♟️ Developer</h2>
                <img src={VectorDown} alt=""></img>
              </button>
              <div ref={toggleRefs.button1Content}>
                <div className="py-1 px-8 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            </div>
          ) : (
            <button
              style={styles.ingenious}
              ref={toggleRefs.button1}
              onClick={() => handleToggle("button1")}
            >
              <h2>♟️ Developer</h2>
              <img src={vector} alt=""></img>
            </button>
          )}
        </div>

        <div className="relative">
          {isOpen.button2 ? (
            <div style={styles.dropdown}>
              <button
                style={styles.ingenious}
                ref={toggleRefs.button2}
                onClick={() => handleToggle("button2")}
              >
                <h2>🌳 Design</h2>
                <img src={VectorDown} alt=""></img>
              </button>
              <div>
                <div className="py-1 px-8 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            </div>
          ) : (
            <button
              style={styles.ingenious}
              ref={toggleRefs.button2}
              onClick={() => handleToggle("button2")}
            >
              <h2>🌳 Design</h2>
              <img src={vector} alt=""></img>
            </button>
          )}
        </div>

        <div className="relative">
          {isOpen.button3 ? (
            <div style={styles.dropdown}>
              <button
                style={styles.ingenious}
                ref={toggleRefs.button3}
                onClick={() => handleToggle("button3")}
              >
                <h2>📝 Content</h2>
                <img src={VectorDown} alt=""></img>
              </button>
              <div>
                <div className="py-1 px-8 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            </div>
          ) : (
            <button
              style={styles.ingenious}
              ref={toggleRefs.button3}
              onClick={() => handleToggle("button3")}
            >
              <h2>📝 Content</h2>
              <img src={vector} alt=""></img>
            </button>
          )}
        </div>

        <div className="relative">
          {isOpen.button4 ? (
            <div style={styles.dropdown}>
              <button
                style={styles.ingenious}
                ref={toggleRefs.button4}
                onClick={() => handleToggle("button4")}
              >
                <h2>⚙️ AI research</h2>
                <img src={VectorDown} alt=""></img>
              </button>
              <div>
                <div className="px-8 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            </div>
          ) : (
            <button
              style={styles.ingenious}
              ref={toggleRefs.button4}
              onClick={() => handleToggle("button4")}
            >
              <h2>⚙️ AI research</h2>
              <img src={vector} alt=""></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  dropdown: {
    height: "auto",
    width: "210px",
    backgroundColor: "#FFFFFF99",
    paddingBottom: "5px",
    borderRadius: "20px",
    position: "relative",
    zIndex: 30,
  },
  ingenious: {
    display: "inline-flex",
    width: "200px",
    alignItems: "baseline",
    justifyContent: "space-between",
    padding: "8px 16px",
    fontWeight: 500,
    gap: 36,
  },
};

export default Ingenious;
