export default function Comclass() {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 md:gap-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03] md:p-3">
  
          <div className="flex items-end justify-between p-3">
            <div>
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Available Classes
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                04
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                in this week
              </span>
            </div>
          </div>
        </div>
  
        <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03] md:p-3">
  
          <div className="flex items-end justify-between p-3">
            <div>
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Available Classes
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                01
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                today
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Metric Item End --> */}
        <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03] md:p-3">
  
          <div className="flex items-end justify-between p-3">
            <div>
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Available TimeSlot
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                Timeslot 1
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                today
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/[0.03] md:p-3">
  
          <div className="flex items-end justify-between p-3">
            <div>
              <span className="text-lg text-gray-500 dark:text-gray-400">
                Extra Classes
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                0
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                completed
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  