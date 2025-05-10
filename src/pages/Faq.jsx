import React from "react";

const items = [
  {
    title: "SUBJECT 1",
    description: "Dokumen brosur terbaru untuk klien.",
    date: "April 23, 2025",
    time: "3:27 PM",
  },
  {
    title: "SUBJECT 2",
    description: "Materi presentasi produk unggulan.",
    date: "May 1, 2025",
    time: "10:00 AM",
  },
];

export default function Faq() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">All Media</div>
          <div className="relative">
            <button className="flex items-center px-3 py-1 border border-gray-200 rounded-md text-sm"></button>
          </div>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition duration-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
