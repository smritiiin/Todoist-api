import React from "react";
import useProjects from "../hooks/getAllProject";

export const Projects = () => {
  const data = useProjects();
  console.log("DATAA: ", data);
  return (
    <div>
      {/* Projects */}
      <div className="flex flex-col gap-y-2 mb-10 max-h-32 overflow-hidden">
        <h2 className=" text-xl text-[#656565] font-medium ml-3">Projects</h2>

        {data ? (
          <div>
            {data.map((object, index) => (
              <div
                className={`${
                  index === 0
                    ? "bg-white rounded-[20px] h-[45px] px-4 py-[10px]"
                    : "h-[45px] px-4 py-[10px]"
                }`}
                key={object.id}
              >
                <h1 className="font-semibold">{object.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div className=" bg-white rounded-[20px] h-[45px] px-4 py-[10px]">
            <h1 className=" font-semibold">UniversalML</h1>
          </div>
        )}
      </div>
    </div>
  );
};
