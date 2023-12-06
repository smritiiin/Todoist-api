import useViewTasks from "../hooks/viewTasks";

const ListTasks = () => {
  const task = useViewTasks();

  return (
    <div>
      <div>
        <h1>List of Tasks </h1>
        {task ? (
          <ul>
            {task.map((item) => (
              <li className="flex" key={item.id}>
                ID: {item.id} <br />
                Name: {item.content}
                <br />
                SECTION ID: {item.sectionId} <br />
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ListTasks;
