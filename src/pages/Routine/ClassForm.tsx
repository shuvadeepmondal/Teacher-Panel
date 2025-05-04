// import { useState } from 'react';
// import { Select } from './ClassFilters';

// export function ClassForm({ classData, onSave, onCancel, days, timeSlots }) {
//   const [formData, setFormData] = useState(classData);
//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
    
//     // Clear error for this field if it exists
//     if (errors[field]) {
//       const newErrors = { ...errors };
//       delete newErrors[field];
//       setErrors(newErrors);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.courseName.trim()) {
//       newErrors.courseName = "Course name is required";
//     }
    
//     if (!formData.courseCode.trim()) {
//       newErrors.courseCode = "Course code is required";
//     }
    
//     if (!formData.instructor.trim()) {
//       newErrors.instructor = "Instructor name is required";
//     }
    
//     if (!formData.department.trim()) {
//       newErrors.department = "Department is required";
//     }
    
//     if (!formData.location.trim()) {
//       newErrors.location = "Location is required";
//     }
    
//     // Validate time (en  {
//       newErrors.location = "Location is required";
//     }
    
//     // Validate time (end time must be after start time)
//     const startTimeIndex = timeSlots.indexOf(formData.startTime);
//     const endTimeIndex = timeSlots.indexOf(formData.endTime);
    
//     if (startTimeIndex >= endTimeIndex) {
//       newErrors.endTime = "End time must be after start time";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       onSave(formData);
//     }
//   };

//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
//       <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
//         <h3 className="text-lg leading-6 font-medium text-gray-900">
//           {formData.id ? "Edit Class" : "Add New Class"}
//         </h3>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="px-4 py-5 sm:p-6">
//           <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
//                 Course Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="courseName"
//                   value={formData.courseName}
//                   onChange={(e) => handleChange("courseName", e.target.value)}
//                   className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.courseName ? 'border-red-500' : ''}`}
//                 />
//                 {errors.courseName && (
//                   <p className="mt-1 text-sm text-red-600">{errors.courseName}</p>
//                 )}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="courseCode" className="block text-sm font-medium text-gray-700">
//                 Course Code
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="courseCode"
//                   value={formData.courseCode}
//                   onChange={(e) => handleChange("courseCode", e.target.value)}
//                   className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.courseCode ? 'border-red-500' : ''}`}
//                 />
//                 {errors.courseCode && (
//                   <p className="mt-1 text-sm text-red-600">{errors.courseCode}</p>
//                 )}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
//                 Instructor
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="instructor"
//                   value={formData.instructor}
//                   onChange={(e) => handleChange("instructor", e.target.value)}
//                   className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.instructor ? 'border-red-500' : ''}`}
//                 />
//                 {errors.instructor && (
//                   <p className="mt-1 text-sm text-red-600">{errors.instructor}</p>
//                 )}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="department" className="block text-sm font-medium text-gray-700">
//                 Department
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="department"
//                   value={formData.department}
//                   onChange={(e) => handleChange("department", e.target.value)}
//                   className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.department ? 'border-red-500' : ''}`}
//                 />
//                 {errors.department && (
//                   <p className="mt-1 text-sm text-red-600">{errors.department}</p>
//                 )}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="day" className="block text-sm font-medium text-gray-700">
//                 Day
//               </label>
//               <div className="mt-1">
//                 <Select
//                   id="day"
//                   value={formData.day}
//                   onChange={(value) => handleChange("day", value)}
//                   options={days.map(day => ({ value: day, label: day }))}
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="location" className="block text-sm font-medium text-gray-700">
//                 Location
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   id="location"
//                   value={formData.location}
//                   onChange={(e) => handleChange("location", e.target.value)}
//                   className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.location ? 'border-red-500' : ''}`}
//                 />
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-600">{errors.location}</p>
//                 )}
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
//                 Start Time
//               </label>
//               <div className="mt-1">
//                 <Select
//                   id="startTime"
//                   value={formData.startTime}
//                   onChange={(value) => handleChange("startTime", value)}
//                   options={timeSlots.map(time => ({ value: time, label: time }))}
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
//                 End Time
//               </label>
//               <div className="mt-1">
//                 <Select
//                   id="endTime"
//                   value={formData.endTime}
//                   onChange={(value) => handleChange("endTime", value)}
//                   className={errors.endTime ? 'border-red-500' : ''}
//                   options={timeSlots.map(time => ({ value: time, label: time }))}
//                 />
//                 {errors.endTime && (
//                   <p className="mt-1 text-sm text-red-600">{errors.endTime}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 space-x-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {formData.id ? "Update Class" : "Add Class"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }