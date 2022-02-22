import { format } from "date-fns";

const Product = ({ contest }) => {
  const start_time = format(
    new Date(contest.start_time),
    "MM-dd-yyyy HH:mm:ss.SS"
  );

  const end_time = format(new Date(contest.end_time), "MM-dd-yyyy HH:mm:ss.SS");

  const start = contest.start_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const end = contest.end_time.replace(/[^a-zA-Z0-9 ]/g, "");
  const text = contest.name.replace(/ /g, "+");
  const calendar = `https://calendar.google.com/event?action=TEMPLATE&dates=${start}/${end}&text=${text}&location=${contest.url}`;

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
      <div className="relative block p-8 border border-gray-100 shadow-xl rounded-xl">
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {contest.site}
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>

          <h5 className="mt-4 text-xl font-bold text-gray-900">
            {contest.name}
          </h5>

          <dl className="flex items-center mt-6 space-x-8 text-xs p-4">
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <div className="sm:ml-3 mt-1.5 sm:mt-0">
                <dt className="text-gray-500">Start Time</dt>

                <dd className="font-medium">{start_time}</dd>
              </div>
            </div>
            <div className="sm:inline-flex sm:items-center sm:shrink-0">
              <div className="sm:ml-3 mt-1.5 sm:mt-0">
                <dt className="text-gray-500">End Time</dt>

                <dd className="font-medium">{end_time}</dd>
              </div>
            </div>
          </dl>
          <div className="flex flex-row justify-between">
            <div>
              <a href={calendar} target="_blank" rel="noreferrer">
                <p className="relative inline-block mt-6 text-sm font-bold text-indigo-600">
                  <span className="absolute inset-x-0 bottom-0 transition-transform transform bg-indigo-100 h-2/3 group-hover:scale-110"></span>
                  <span className="relative">Add Event To Calendar</span>
                </p>
              </a>
            </div>
            <div>
              <p className="relative inline-block mt-6 text-sm font-bold text-indigo-600">
                <span className="absolute inset-x-0 bottom-0 transition-transform transform bg-indigo-100 h-2/3 group-hover:scale-210"></span>
                <a href={contest.url} target="_blank" rel="noreferrer">
                  <span className="relative">Url</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
