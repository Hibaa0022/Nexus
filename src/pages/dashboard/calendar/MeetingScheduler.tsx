import React from 'react';
import { Calendar, Plus, Trash2, Check, X, Clock } from 'lucide-react';

const MeetingScheduler = () => {
  // Mock data to match the image
  const availabilities = [
    { id: 1, date: 'Jan 17, 2026', time: '10:00 - 11:00' },
    { id: 2, date: 'Jan 19, 2026', time: '14:00 - 15:00' },
    { id: 3, date: 'Jan 21, 2026', time: '09:00 - 10:00' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Meeting Scheduler</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={18} /> Add Availability
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between mb-6 items-center">
            <button className="p-2 hover:bg-gray-100 rounded-md border text-gray-600">{"<"}</button>
            <h2 className="font-semibold text-lg">January 2026</h2>
            <button className="p-2 hover:bg-gray-100 rounded-md border text-gray-600">{">"}</button>
          </div>

          <div className="grid grid-cols-7 border-l border-t border-gray-100">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-3 text-center text-sm font-medium text-gray-500 border-r border-b border-gray-100">
                {day}
              </div>
            ))}
            
            {/* Empty cells for Dec offset (Jan 2026 starts on Thu) */}
            {[28, 29, 30, 31].map(d => (
              <div key={`prev-${d}`} className="bg-gray-50/50 min-h-[100px] p-2 border-r border-b border-gray-100">
                <span className="text-sm text-gray-300 flex justify-end">{d}</span>
              </div>
            ))}

            {/* January Days */}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === 16;
              return (
                <div key={day} className={`min-h-[100px] p-2 border-r border-b border-gray-100 relative ${isToday ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex justify-end mb-1">
                    <span className={`text-sm w-6 h-6 flex items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-gray-500'}`}>
                      {day}
                    </span>
                  </div>
                  
                  {/* Calendar Badges based on image */}
                  {day === 17 && <div className="text-[10px] p-1 bg-green-100 text-green-700 rounded border border-green-200 truncate">10:00-11:00 A...</div>}
                  {day === 19 && <div className="text-[10px] p-1 bg-green-100 text-green-700 rounded border border-green-200 truncate">14:00-15:00 A...</div>}
                  {day === 20 && <div className="text-[10px] p-1 bg-blue-100 text-blue-700 rounded border border-blue-200 truncate">15:00-16:00 P...</div>}
                  {day === 21 && <div className="text-[10px] p-1 bg-green-100 text-green-700 rounded border border-green-200 truncate">09:00-10:00 ...</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Your Availability Section */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-700">
              <Clock size={18} className="text-gray-500"/> Your Availability
            </h3>
            <div className="space-y-3">
              {availabilities.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Available</p>
                    <p className="text-gray-500 text-xs">{item.date} • {item.time}</p>
                  </div>
                  <Trash2 size={16} className="text-red-400 cursor-pointer hover:text-red-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Meeting Requests Section */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-700">
              <Calendar size={18} className="text-gray-500"/> Meeting Requests
            </h3>
            <div className="space-y-4">
              {/* Request 1 - Pending */}
              <div className="p-4 border border-gray-100 rounded-xl bg-white">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm">Business Discussion</h4>
                  <span className="text-[10px] px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium">pending</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">John Doe • Jan 18, 2026 • 11:00 - 12:00</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                    <Check size={14}/> Accept
                  </button>
                  <button className="flex-1 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                    <X size={14}/> Decline
                  </button>
                </div>
              </div>

              {/* Request 2 - Accepted */}
              <div className="p-4 border border-gray-100 rounded-xl bg-white">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-sm">Project Review</h4>
                  <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">accepted</span>
                </div>
                <p className="text-xs text-gray-500">Jane Smith • Jan 20, 2026 • 15:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;