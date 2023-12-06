import Ingenious from "../components/Ingenious";
import search from "../assets/search.svg";
import Graph from "../components/Graph";
import useProjects from "../hooks/getAllProject";

const Dashboard = () => {
  const data = useProjects();
  console.log("DATAA: ", data);
  

  return (
    <div className="bg-bg-img h-screen w-full py-5 px-6 flex gap-x-14">
      {/* Side Bar */}
      <div className=" w-1/5 h-full">
        {/* Search Bar */}
        <div className=" bg-white rounded-[20px] h-10 p-2.5 flex gap-x-3 mb-7">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search here"
            className=" w-full"
          ></input>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-y-2 mb-10">
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

        <Ingenious />
      </div>

      {/* Graph */}
      <div className="w-4/5 h-full">
        <Graph />
      </div>
    </div>
  );
};

export default Dashboard;
