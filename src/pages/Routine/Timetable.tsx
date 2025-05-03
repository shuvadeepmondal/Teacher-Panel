import { useState } from 'react';

export function Timetable({ classes, days, timeSlots, onEdit, onDelete, isMobile }) {
  const [expandedDay, setExpandedDay] = useState(days[0]);

  // Function to determine if a class should be displayed in a specific time slot
  const getClassForTimeSlot = (day, timeSlot) => {
    return classes.filter(cls => {
      if (cls.day !== day) return false;
      
      // Convert time strings to comparable values (assuming AM/PM format)
      const convertTimeToMinutes = (time) => {
        const [hourStr, minuteStr] = time.split(':');
        let hour = parseInt(hourStr);
        const minute = parseInt(minuteStr.split(' ')[0]);
        const isPM = time.includes('PM') && hour !== 12;
        const isAM = time.includes('AM') && hour === 12;
        
        if (isPM) hour += 12;
        if (isAM) hour = 0;
        
        return hour * 60 + minute;
      };
      
      const slotTime = convertTimeToMinutes(timeSlot);
      const startTime = convertTimeToMinutes(cls.startTime);
      const endTime = convertTimeToMinutes(cls.endTime);
      
      return slotTime >= startTime && slotTime < endTime;
    });
  };
  
  if (isMobile) {
    // Mobile view - show one day at a time with scrollable time slots
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="flex border-b">
          {days.map(day => (
            <button
              key={day}
              className={`flex-1 py-2 text-sm font-medium text-center ${expandedDay === day ? 'text-indigo-600 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setExpandedDay(day)}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>
        
        {days.map(day => (
          <div key={day} className={expandedDay === day ? 'block' : 'hidden'}>
            <div className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              {day}
            </div>
            <div className="divide-y divide-gray-200">
              {timeSlots.map(timeSlot => {
                const classesInSlot = getClassForTimeSlot(day, timeSlot);
                return (
                  <div key={`${day}-${timeSlot}`} className="px-4 py-3">
                    <div className="text-xs font-medium text-gray-500 mb-2">{timeSlot}</div>
                    {classesInSlot.length > 0 ? (
                      <div className="space-y-2">
                        {classesInSlot.map(cls => (
                          <div 
                            key={cls.id} 
                            className={`rounded-md border p-2 ${cls.color}`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-sm">{cls.courseName}</div>
                                <div className="text-xs">{cls.courseCode} • {cls.location}</div>
                                <div className="text-xs mt-1">{cls.instructor}</div>
                              </div>
                              <div className="flex space-x-1">
                                <button 
                                  onClick={() => onEdit(cls)}
                                  className="p-1 rounded-full hover:bg-white/50"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </button>
                                <button 
                                  onClick={() => onDelete(cls.id)}
                                  className="p-1 rounded-full hover:bg-white/50"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-8 text-xs text-gray-400 italic">No classes</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  // Desktop view - full timetable grid
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-20 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              {days.map(day => (
                <th key={day} scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {timeSlots.map((timeSlot, index) => (
              <tr key={timeSlot} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-500 border-r border-gray-200">
                  {timeSlot}
                </td>
                {days.map(day => {
                  const classesInSlot = getClassForTimeSlot(day, timeSlot);
                  
                  // Check if this is the start time for any class
                  const isStartTime = classesInSlot.some(cls => cls.startTime === timeSlot);
                  
                  // If not a start time and there are classes, skip rendering (will be covered by rowspan)
                  if (!isStartTime && classesInSlot.length > 0) {
                    return null;
                  }
                  
                  return (
                    <td 
                      key={`${day}-${timeSlot}`} 
                      className="px-2 py-2 align-top border-r border-gray-200"
                    >
                      {classesInSlot.map(cls => (
                        cls.startTime === timeSlot && (
                          <div 
                            key={cls.id} 
                            className={`rounded-md border p-2 h-full ${cls.color}`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-medium text-sm">{cls.courseName}</div>
                                <div className="text-xs">{cls.courseCode} • {cls.location}</div>
                                <div className="text-xs mt-1">{cls.instructor}</div>
                                <div className="text-xs mt-1">{cls.startTime} - {cls.endTime}</div>
                              </div>
                              <div className="flex space-x-1">
                                <button 
                                  onClick={() => onEdit(cls)}
                                  className="p-1 rounded-full hover:bg-white/50"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </button>
                                <button 
                                  onClick={() => onDelete(cls.id)}
                                  className="p-1 rounded-full hover:bg-white/50"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}