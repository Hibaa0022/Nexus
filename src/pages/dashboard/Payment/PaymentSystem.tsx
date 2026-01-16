import React from 'react';
import { Wallet, TrendingUp, TrendingDown, Users, CreditCard, Landmark, Download, Send } from 'lucide-react';

const PaymentSystem = () => {
  const recentRecipients = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Robert Johnson' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-slate-700">
      {/* Header with Export Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payments</h1>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
          <Download size={18} /> Export Transactions
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Wallet Balance', val: '$5420.75', icon: <Wallet size={24}/>, color: 'bg-blue-600 text-white' },
          { label: 'Total Received', val: '$2050.00', icon: <TrendingUp size={24}/>, color: 'bg-white text-green-600 border-gray-100' },
          { label: 'Total Sent', val: '$570.50', icon: <TrendingDown size={24}/>, color: 'bg-white text-red-600 border-gray-100' },
          { label: 'Active Transactions', val: '4', icon: <Users size={24}/>, color: 'bg-white text-blue-600 border-gray-100' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.color} p-6 rounded-xl border shadow-sm flex justify-between items-start`}>
            <div>
              <p className="text-sm font-medium opacity-80">{stat.label}</p>
              <h2 className="text-2xl font-bold mt-1">{stat.val}</h2>
            </div>
            <div className={`p-2 rounded-lg ${stat.color.includes('blue-600') ? 'bg-white/20' : 'bg-gray-50 text-current'}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Mockup */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium flex items-center gap-2">
          <Send size={16} /> Send Payment
        </button>
        <button className="pb-3 text-gray-400 font-medium flex items-center gap-2 hover:text-gray-600 transition-colors">
          <TrendingUp size={16} /> Receive Payment
        </button>
        <button className="pb-3 text-gray-400 font-medium flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Wallet size={16} /> Transaction History
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Send Payment</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-600">Amount ($)</label>
              <input type="number" placeholder="0" className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-600">Recipient</label>
              <select className="w-full border border-gray-200 p-3 rounded-lg outline-none bg-white">
                <option>Select a recipient</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-600">Description</label>
              <textarea placeholder="Enter payment description" rows={4} className="w-full border border-gray-200 p-3 rounded-lg outline-none"></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-600">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border-2 p-3 rounded-lg bg-blue-50 text-blue-600 border-blue-200 font-semibold">
                  <CreditCard size={18}/> Card
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-200 p-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  <Landmark size={18}/> Bank Transfer
                </button>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-md mt-4">
              Process Payment
            </button>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
            
            {/* Deposit Section */}
            <div className="bg-slate-50 p-4 rounded-xl mb-6">
              <p className="text-sm font-bold text-slate-600 mb-3">Deposit Funds</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Amount" 
                  className="flex-1 border border-gray-200 px-3 py-2 rounded-lg text-sm outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">
                  Add $500
                </button>
              </div>
            </div>

            {/* Recent Recipients */}
            <div>
              <p className="text-sm font-bold text-slate-600 mb-4">Recent Recipients</p>
              <div className="space-y-3">
                {recentRecipients.map((person, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-sm font-medium text-slate-700">{person.name}</span>
                    <button className="text-xs font-bold text-slate-500 border border-gray-200 px-3 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      Send
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystem;