import React from "react";

interface Restaurant {
  _id: string;
  name: string;
}

interface TableOneProps {
  data: {
    documents?: Restaurant[];
  };
}

const TableOne: React.FC<TableOneProps> = ({ data }) => {
  const documents = data?.documents || [];

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">ID</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
        </div>

        {documents.map((document) => (
          <div
            key={document._id}
            className="grid grid-cols-2 border-b border-stroke dark:border-strokedark"
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{document._id}</p>
            </div>
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{document.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
