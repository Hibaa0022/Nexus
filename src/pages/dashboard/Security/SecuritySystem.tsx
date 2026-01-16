import React from 'react';
import { Lock, Smartphone, ShieldCheck, Key, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Security Settings</h1>
        <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
          <ShieldCheck size={18}/> Account Secured
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          
          {/* Change Password Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
              <Lock size={18} className="text-blue-600"/> Change Password
            </h3>
            <div className="space-y-4">
              <input type="password" placeholder="Current Password" className="w-full border border-gray-200 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="New Password" className="w-full border border-gray-200 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-1/4 bg-red-500 h-full"></div>
              </div>
              <p className="text-xs font-bold text-red-500">Password Strength: Very Weak</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">Update Password</button>
            </div>
          </div>

          {/* Two-Factor Authentication Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold flex items-center gap-2 text-slate-800">
                <Smartphone size={20} className="text-blue-600"/> Two-Factor Authentication
              </h3>
              <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold">Disable</button>
            </div>
            <p className="text-sm text-gray-500 mb-6">Add an extra layer of security to your account.</p>
            
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <h4 className="text-blue-700 font-bold text-sm mb-1">Authentication App Setup</h4>
              <p className="text-xs text-blue-600 mb-6">Scan the QR code below with your authenticator app (Google Authenticator, Authy, etc.)</p>
              
              <div className="flex flex-col items-center">
                <div className="bg-white border-2 border-dashed border-gray-200 w-40 h-40 rounded-lg flex flex-col items-center justify-center p-4">
                   <div className="bg-gray-300 w-24 h-24 rounded"></div>
                   <p className="mt-2 text-[10px] text-gray-400 font-bold uppercase">QR Code Placeholder</p>
                </div>
                <p className="mt-4 font-mono text-sm tracking-widest text-slate-600 text-center">
                  Secret Key: <span className="font-bold">ABCD EFGH IJKL MNOP QRST UVWX YZ12 3456</span>
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold text-slate-700 mb-3">Verify Setup</p>
                <p className="text-xs text-gray-500 mb-4">Enter the 6-digit code from your authenticator app</p>
                <div className="flex gap-2 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <input key={i} type="text" maxLength={1} className="w-10 h-12 border border-gray-200 rounded-lg text-center font-bold text-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                  <span className="text-sm font-bold text-slate-700">Backup Codes</span>
                  <button className="text-xs font-bold border border-gray-300 px-4 py-2 rounded-lg hover:bg-white">Show Codes</button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Questions Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-6 flex items-center gap-2 text-slate-800">
              <Key size={18} className="text-blue-600"/> Security Questions
            </h3>
            <div className="space-y-6">
              {[
                "What was your first pet's name?",
                "What city were you born in?",
                "What is your mother's maiden name?"
              ].map((q, i) => (
                <div key={i}>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{q}</label>
                  <input type="text" placeholder="Your answer" className="w-full border border-gray-200 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Save Security Questions
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Recent Login Activity Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
              <HelpCircle size={18} className="text-blue-600"/> Recent Login Activity
            </h3>
            <div className="space-y-4">
              {[
                { date: "1/16/2026 • 5:02:21 PM", device: "Chrome on Windows", loc: "New York, US • 192.168.1.100", status: "success" },
                { date: "1/15/2026 • 6:02:21 PM", device: "Safari on iPhone", loc: "London, UK • 104.28.29.100", status: "success" },
                { date: "1/14/2026 • 6:02:21 PM", device: "Firefox on Linux", loc: "Tokyo, Japan • 203.0.113.45", status: "failed" },
              ].map((log, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-xl bg-gray-50/30">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[11px] font-black text-slate-800">{log.date}</p>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${log.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {log.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{log.device}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{log.loc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Tips Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
            <h3 className="font-bold mb-6 flex items-center gap-2 text-slate-800">
               <ShieldCheck size={18} className="text-blue-600"/> Security Tips
            </h3>
            <div className="space-y-4">
              {[
                { text: "Use a unique, strong password for your account", icon: <CheckCircle className="text-green-500" size={16}/> },
                { text: "Enable two-factor authentication", icon: <CheckCircle className="text-green-500" size={16}/> },
                { text: "Don't share your account credentials", icon: <CheckCircle className="text-green-500" size={16}/> },
                { text: "Review your login activity regularly", icon: <AlertCircle className="text-yellow-500" size={16}/> },
                { text: "Update your recovery options", icon: <AlertCircle className="text-yellow-500" size={16}/> },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5">{tip.icon}</div>
                  <p className="text-sm font-medium text-slate-600 leading-tight">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;