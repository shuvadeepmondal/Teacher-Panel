// import { useState, useEffect } from 'react';
// import { Timetable } from './Timetable';
// import { ClassForm } from './ClassForm';
// import { ClassFilters } from './ClassFilters';

// // Constants
// const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const TIME_SLOTS = [
//   "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
//   "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
// ];
// const COLORS = [
//   "bg-blue-100 border-blue-300 text-blue-800",
//   "bg-green-100 border-green-300 text-green-800",
//   "bg-purple-100 border-purple-300 text-purple-800",
//   "bg-yellow-100 border-yellow-300 text-yellow-800",
//   "bg-pink-100 border-pink-300 text-pink-800",
//   "bg-indigo-100 border-indigo-300 text-indigo-800",
//   "bg-red-100 border-red-300 text-red-800",
//   "bg-orange-100 border-orange-300 text-orange-800",
// ];

// // Sample initial data
// const initialClasses = [
//   {
//     id: "1",
//     courseName: "Introduction to Computer Science",
//     courseCode: "CS101",
//     instructor: "Dr. Smith",
//     department: "Computer Science",
//     day: "Monday",
//     startTime: "9:00 AM",
//     endTime: "11:00 AM",
//     location: "Room 101",
//     color: COLORS[0]
//   },
//   {
//     id: "2",
//     courseName: "Calculus I",
//     courseCode: "MATH201",
//     instructor: "Dr. Johnson",
//     department: "Mathematics",
//     day: "Monday",
//     startTime: "1:00 PM",
//     endTime: "3:00 PM",
//     location: "Room 203",
//     color: COLORS[1]
//   },
//   {
//     id: "3",
//     courseName: "Physics for Engineers",
//     courseCode: "PHYS150",
//     instructor: "Dr. Williams",
//     department: "Physics",
//     day: "Tuesday",
//     startTime: "10:00 AM",
//     endTime: "12:00 PM",
//     location: "Lab 3B",
//     color: COLORS[2]
//   },
//   {
//     id: "4",
//     courseName: "English Composition",
//     courseCode: "ENG101",
//     instructor: "Prof. Davis",
//     department: "English",
//     day: "Wednesday",
//     startTime: "2:00 PM",
//     endTime: "4:00 PM",
//     location: "Room 305",
//     color: COLORS[3]
//   },
//   {
//     id: "5",
//     courseName: "Database Systems",
//     courseCode: "CS305",
//     instructor: "Dr. Smith",
//     department: "Computer Science",
//     day: "Thursday",
//     startTime: "9:00 AM",
//     endTime: "11:00 AM",
//     location: "Computer Lab 2",
//     color: COLORS[4]
//   }
// ];

// // Custom hook for media queries
// function useMediaQuery(query) {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     setMatches(media.matches);

//     const listener = (event) => {
//       setMatches(event.matches);
//     };

//     media.addEventListener("change", listener);
//     return () => {
//       media.removeEventListener("change", listener);
//     };
//   }, [query]);

//   return matches;
// }

// function Routine() {
//   const [classes, setClasses] = useState(initialClasses);
//   const [editingClass, setEditingClass] = useState(null);
//   const [filters, setFilters] = useState({
//     department: "",
//     instructor: "",
//     day: ""
//   });
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [activeTab, setActiveTab] = useState("timetable");
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const handleAddClass = (newClass) => {
//     const id = Date.now().toString();
//     const colorIndex = Math.floor(Math.random() * COLORS.length);
    
//     setClasses([...classes, { 
//       ...newClass, 
//       id, 
//       color: COLORS[colorIndex] 
//     }]);
    
//     setEditingClass(null);
//   };

//   const handleEditClass = (updatedClass) => {
//     setClasses(classes.map(c => 
//       c.id === updatedClass.id ? updatedClass : c
//     ));
//     setEditingClass(null);
//   };

//   const handleDeleteClass = (id) => {
//     setClasses(classes.filter(c => c.id !== id));
//   };

//   const filteredClasses = classes.filter(c => {
//     return (
//       (filters.department === "" || c.department === filters.department) &&
//       (filters.instructor === "" || c.instructor === filters.instructor) &&
//       (filters.day === "" || c.day === filters.day)
//     );
//   });

//   const departments = Array.from(new Set(classes.map(c => c.department)));
//   const instructors = Array.from(new Set(classes.map(c => c.instructor)));

//   const generateRandomSchedule = () => {
//     setIsGenerating(true);
    
//     // Simulate processing time
//     setTimeout(() => {
//       const newClasses = [];
//       const departments = ["Computer Science", "Mathematics", "Physics", "English", "History", "Biology"];
//       const instructors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Prof. Davis", "Dr. Brown", "Prof. Miller"];
//       const courseNames = [
//         "Introduction to Programming", "Calculus II", "Quantum Physics", 
//         "Literature Analysis", "World History", "Molecular Biology",
//         "Data Structures", "Linear Algebra", "Thermodynamics",
//         "Creative Writing", "Ancient Civilizations", "Genetics"
//       ];
//       const courseCodes = ["CS102", "MATH202", "PHYS250", "ENG201", "HIST101", "BIO150"];
//       const locations = ["Room 101", "Room 203", "Lab 3B", "Room 305", "Lecture Hall A", "Lab 2C"];
      
//       // Generate 8-12 random classes
//       const numClasses = Math.floor(Math.random() * 5) + 8;
      
//       for (let i = 0; i < numClasses; i++) {
//         const deptIndex = Math.floor(Math.random() * departments.length);
//         const day = DAYS[Math.floor(Math.random() * DAYS.length)];
        
//         // Ensure reasonable time slots (start time before end time)
//         const startTimeIndex = Math.floor(Math.random() * (TIME_SLOTS.length - 1));
//         const endTimeIndex = startTimeIndex + 1 + Math.floor(Math.random() * (TIME_SLOTS.length - startTimeIndex - 1));
        
//         newClasses.push({
//           id: (i + 1).toString(),
//           courseName: courseNames[Math.floor(Math.random() * courseNames.length)],
//           courseCode: courseCodes[Math.floor(Math.random() * courseCodes.length)] + i,
//           instructor: instructors[Math.floor(Math.random() * instructors.length)],
//           department: departments[deptIndex],
//           day,
//           startTime: TIME_SLOTS[startTimeIndex],
//           endTime: TIME_SLOTS[Math.min(endTimeIndex, TIME_SLOTS.length - 1)],
//           location: locations[Math.floor(Math.random() * locations.length)],
//           color: COLORS[Math.floor(Math.random() * COLORS.length)]
//         });
//       }
      
//       setClasses(newClasses);
//       setIsGenerating(false);
//     }, 1500);
//   };

//   const exportSchedule = () => {
//     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(classes, null, 2));
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", "college_schedule.json");
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold text-gray-900 mb-2">College Class Schedule Generator</h1>
//       <p className="text-gray-600 mb-6">Create and manage your college class timetable with ease</p>
      
//       <div className="space-y-6">
//         <div className="flex flex-col md:flex-row justify-between gap-4">
//           <div className="flex flex-wrap gap-2">
//             <button 
//               onClick={() => setEditingClass({
//                 id: "",
//                 courseName: "",
//                 courseCode: "",
//                 instructor: "",
//                 department: "",
//                 day: DAYS[0],
//                 startTime: TIME_SLOTS[0],
//                 endTime: TIME_SLOTS[1],
//                 location: "",
//                 color: COLORS[0]
//               })}
//               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//               </svg>
//               Add Class
//             </button>
            
//             <button 
//               onClick={generateRandomSchedule}
//               disabled={isGenerating}
//               className={`inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-1 ${isGenerating ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//               </svg>
//               {isGenerating ? "Generating..." : "Generate Random Schedule"}
//             </button>
            
//             <button 
//               onClick={exportSchedule}
//               className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//               </svg>
//               Export Schedule
//             </button>
//           </div>
          
//           <ClassFilters 
//             departments={departments}
//             instructors={instructors}
//             days={DAYS}
//             filters={filters}
//             setFilters={setFilters}
//           />
//         </div>
        
//         {editingClass && (
//           <ClassForm 
//             classData={editingClass}
//             onSave={editingClass.id ? handleEditClass : handleAddClass}
//             onCancel={() => setEditingClass(null)}
//             days={DAYS}
//             timeSlots={TIME_SLOTS}
//           />
//         )}
        
//         <div className="mt-4">
//           <div className="border-b border-gray-200">
//             <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//               <button
//                 onClick={() => setActiveTab("timetable")}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === "timetable"
//                     ? 'border-indigo-500 text-indigo-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//                 `}
//               >
//                 Timetable View
//               </button>
//               <button
//                 onClick={() => setActiveTab("list")}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === "list"
//                     ? 'border-indigo-500 text-indigo-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//                 `}
//               >
//                 List View
//               </button>
//             </nav>
//           </div>
          
//           <div className="mt-4">
//             {activeTab === "timetable" && (
//               <Timetable 
//                 classes={filteredClasses} 
//                 days={DAYS} 
//                 timeSlots={TIME_SLOTS}
//                 onEdit={setEditingClass}
//                 onDelete={handleDeleteClass}
//                 isMobile={isMobile}
//               />
//             )}
            
//             {activeTab === "list" && (
//               <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {filteredClasses.map((cls) => (
//                         <tr key={cls.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="font-medium text-gray-900">{cls.courseName}</div>
//                             <div className="text-sm text-gray-500">{cls.courseCode}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">{cls.instructor}</div>
//                             <div className="text-xs text-gray-500">{cls.department}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {cls.day}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {cls.startTime} - {cls.endTime}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {cls.location}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <button 
//                               onClick={() => setEditingClass(cls)}
//                               className="text-indigo-600 hover:text-indigo-900 mr-3"
//                             >
//                               Edit
//                             </button>
//                             <button 
//                               onClick={() => handleDeleteClass(cls.id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                       {filteredClasses.length === 0 && (
//                         <tr>
//                           <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
//                             No classes found. Add a class or adjust your filters.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Routine;