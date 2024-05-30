



function SlowProject({ index } : {index : number}) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
       SlowProject #{index + 1}
      </li>
    );
  }
  

const Projects = () => {
 
  const titles = []

  for(let  i = 0; i < 2000; i++){
     titles.push(<SlowProject index={i} key={i}/>)
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-2">
         {
            titles
         }
      </ul>
    </div>
  );
};

export default Projects;
