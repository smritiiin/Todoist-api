import React, { useState, useEffect, useRef } from "react";
import vector from "../assets/Vector.svg";

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
        setIsOpen(prevState => ({ ...prevState, [button]: false }));
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
    setIsOpen(prevState => ({ ...prevState, [button]: !prevState[button] }));
  };

  return (
    <div>
      {/* Ingenious */}
      <div>
        <h1 className=" font-medium text-xl text-[#656565] ml-3 mb-3">Ingenious</h1>
        <div className="relative">
          <button
            style={styles.ingenious}
            ref={toggleRefs.button1}
            onClick={() => handleToggle("button1")}
          >
            <h2>♟️ Developer</h2>
            <img src={vector} alt=""></img>
          </button>

          {isOpen.button1 && (
            <>
              {/* <button
                className="inline-flex gap-x-9 items-center justify-between px-4 py-2 text-sm font-medium"
                onClick={toggleDropdown1}
              >
                <h2>♟️ Developer</h2>
                <img src={vector} alt=""></img>
              </button> */}
              <div style={styles.dropdown} ref={toggleRefs.button1Content}>
                <div className="py-1 flex flex-col">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative">
          <button
            style={styles.ingenious}
            ref={toggleRefs.button2}
            onClick={() => handleToggle("button2")}
          >
            <h2>🌳 Design</h2>
            <img src={vector} alt=""></img>
          </button>

          {isOpen.button2 && (
            <div style={styles.dropdown}>
              <div className="py-1 flex flex-col">
                <h1>Option 1</h1>
                <h1>Option 2</h1>
                <h1>Option 3</h1>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            style={styles.ingenious}
            ref={toggleRefs.button3}
            onClick={() => handleToggle("button3")}
          >
            <h2>📝 Content</h2>
            <img src={vector} alt=""></img>
          </button>

          {isOpen.button3 && (
            <div style={styles.dropdown}>
              <div className="py-1 flex flex-col">
                <h1>Option 1</h1>
                <h1>Option 2</h1>
                <h1>Option 3</h1>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            style={styles.ingenious}
            ref={toggleRefs.button4}
            onClick={() => handleToggle("button4")}
          >
            <h2>⚙️ AI research</h2>
            <img src={vector} alt=""></img>
          </button>

          {isOpen.button4 && (
            <div style={styles.dropdown}>
              <div className="py-1 flex flex-col">
                <h1>Option 1</h1>
                <h1>Option 2</h1>
                <h1>Option 3</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  dropdown: {
    height: "auto",
    width: "216px",
    backgroundColor: "#FFFFFF99",
    padding: " 10px 16px",
    borderRadius: "20px",
    position: "relative",
    zIndex: 30,
  },
  ingenious: {
    display: "inline-flex",
    width: "216px",
    alignItems: "baseline",
    justifyContent: "space-between",
    padding: "8px 16px",
    fontWeight: 500,
    gap: 36,
  },
};

export default Ingenious;
