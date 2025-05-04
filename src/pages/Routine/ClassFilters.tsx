
// import { Select } from './Select';

// export function ClassFilters({ departments, instructors, days, filters, setFilters }) {
//   const clearFilters = () => {
//     setFilters({
//       department: "",
//       instructor: "",
//       day: ""
//     });
//   };

//   const hasActiveFilters = filters.department || filters.instructor || filters.day;

//   return (
//     <div className="flex flex-col md:flex-row gap-3 items-end">
//       <div className="w-full md:w-auto">
//         <Select
//           id="department-filter"
//           label="Department"
//           value={filters.department}
//           onChange={(value) => setFilters({ ...filters, department: value })}
//           options={[
//             { value: "", label: "All Departments" },
//             ...departments.map(dept => ({ value: dept, label: dept }))
//           ]}
//         />
//       </div>
      
//       <div className="w-full md:w-auto">
//         <Select
//           id="instructor-filter"
//           label="Instructor"
//           value={filters.instructor}
//           onChange={(value) => setFilters({ ...filters, instructor: value })}
//           options={[
//             { value: "", label: "All Instructors" },
//             ...instructors.map(instructor => ({ value: instructor, label: instructor }))
//           ]}
//         />
//       </div>
      
//       <div className="w-full md:w-auto">
//         <Select
//           id="day-filter"
//           label="Day"
//           value={filters.day}
//           onChange={(value) => setFilters({ ...filters, day: value })}
//           options={[
//             { value: "", label: "All Days" },
//             ...days.map(day => ({ value: day, label: day }))
//           ]}
//         />
//       </div>
      
//       {hasActiveFilters && (
//         <button 
//           onClick={clearFilters}
//           className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 md:mt-0"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//           Clear Filters
//         </button>
//       )}
//     </div>
//   );
// }