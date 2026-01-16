import React from 'react';
import { Upload, FileText, Clock, CheckCircle2, PenLine, FileCode } from 'lucide-react';

const DocumentChamber = () => {
  const documents = [
    {
      name: "Investment Agreement.pdf",
      size: "2.4 MB",
      type: "Agreement",
      status: "In Review",
      statusColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
      statusIcon: <Clock size={14} className="mr-1" />,
      user: "John Doe",
      date: "1/15/2026",
    },
    {
      name: "Partnership Contract.pdf",
      size: "1.8 MB",
      type: "Contract",
      status: "Signed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      statusIcon: <CheckCircle2 size={14} className="mr-1" />,
      user: "Jane Smith",
      date: "1/14/2026",
    },
    {
      name: "Project Proposal.docx",
      size: "0.9 MB",
      type: "Proposal",
      status: "Draft",
      statusColor: "bg-gray-100 text-gray-700 border-gray-300",
      statusIcon: <PenLine size={14} className="mr-1" />,
      user: "Robert Johnson",
      date: "1/13/2026",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-slate-700">
      {/* Top Section: Upload and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-lg font-semibold mb-4">Upload New Document</h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center bg-white flex flex-col items-center justify-center">
            <Upload className="text-gray-400 mb-4" size={48} />
            <p className="text-lg font-medium text-gray-600">Drag 'n' drop files here, or click to select</p>
            <p className="text-sm text-gray-400 mt-2">
              Accepted: .pdf, .doc, .docx, .txt, .xls, .xlsx | Max size: 10MB
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Document Preview</h2>
          <div className="flex flex-col items-center justify-center h-48 text-gray-400">
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <FileCode size={40} className="text-gray-300" />
            </div>
            <p className="text-sm font-medium">Select a document to preview</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Documents Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6">Documents</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="pb-4 font-semibold">Document</th>
                <th className="pb-4 font-semibold">Type</th>
                <th className="pb-4 font-semibold">Status</th>
                <th className="pb-4 font-semibold">Uploaded By</th>
                <th className="pb-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {documents.map((doc, index) => (
                <tr key={index} className="group hover:bg-slate-50 transition-colors">
                  <td className="py-5 flex items-center gap-4">
                    <FileText className="text-gray-400" size={24} />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{doc.name}</p>
                      <p className="text-xs text-gray-400">{doc.size}</p>
                    </div>
                  </td>
                  <td className="py-5 text-sm text-gray-500">{doc.type}</td>
                  <td className="py-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${doc.statusColor}`}>
                      {doc.statusIcon}
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-5 text-sm text-gray-500">{doc.user}</td>
                  <td className="py-5 text-sm text-gray-500">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Custom Styled Scrollbar for the table */}
          <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentChamber;