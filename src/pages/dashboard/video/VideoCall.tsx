import React from 'react';
import { Phone, Video, PhoneCall, User } from 'lucide-react';

const VideoCall = () => {
  const recentCalls = [
    { name: 'John Doe', date: '1/15/2026', duration: '24:15', type: 'audio' },
    { name: 'Jane Smith', date: '1/14/2026', duration: '15:30', type: 'video' },
    { name: 'Robert Johnson', date: '1/13/2026', duration: '45:20', type: 'audio' },
  ];

  const participants = [
    { name: 'You', status: 'Online' },
    { name: 'John Doe', status: 'Online' },
    { name: 'Jane Smith', status: 'Online' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-slate-800 font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Video Calling</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors">
          <Video size={18} /> Start Call
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Start a New Call Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Start a New Call</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-600">Enter Participant Name</label>
                <input 
                  type="text" 
                  placeholder="Enter name or email" 
                  className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-slate-600">Call Type</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="callType" className="w-4 h-4 text-blue-600" defaultChecked />
                    <span className="text-sm font-medium group-hover:text-blue-600">Audio Call</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="callType" className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium group-hover:text-blue-600">Video Call</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-bold shadow-md hover:bg-blue-700 transition-all">
                  <PhoneCall size={18} /> Start Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Recent Calls and Participants */}
        <div className="space-y-8">
          {/* Recent Calls List */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Recent Calls</h2>
            <div className="space-y-4">
              {recentCalls.map((call, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className={`p-3 rounded-full ${call.type === 'video' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    {call.type === 'video' ? <Video size={18} /> : <Phone size={18} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-slate-800">{call.name}</p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {call.date} • {call.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Participants List */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Participants</h2>
            <div className="space-y-4">
              {participants.map((person, idx) => (
                <div key={idx} className="flex items-center gap-3 p-1">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{person.name}</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">
                      {person.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;