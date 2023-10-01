const Project = () => {
  return (
    <div className="h-[100%] md:h-screen border-solid border-2 border-gray-100 p-2 mt-4 rounded-2xl ">
      <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-50 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam rerum beatae suscipit modi laboriosam aut deserunt repellendus perferendis ex iusto! Beatae illum tempora laborum, explicabo sint sunt qui odio molestias!
          </p>
            <div className="flex flex-row space-x-8">
            <div>profile </div>
          <button className="p-1 bg-blue-600 hover:bg-blue-800 text-white rounded-sm "> Interested</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
