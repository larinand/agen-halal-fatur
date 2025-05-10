function FeeEstimationCalculator() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* Title & Breadcrumb */}
        <div className="mb-6">
          <h3 className="text-[25px] font-bold text-gray-900 mb-1 text-left">
            Fee Estimate Calculator
          </h3>
        </div>
        {/* Form Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full">
          <h4 className="text-lg font-semibold mb-4 text-left">
            Input Estimation Fields
          </h4>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Field A
              </label>
              <input
                type="text"
                placeholder="Enter value"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Field B
              </label>
              <input
                type="text"
                placeholder="Enter value"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Field C
              </label>
              <input
                type="text"
                placeholder="Enter value"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Field D
              </label>
              <input
                type="text"
                placeholder="Enter value"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                Field E
              </label>
              <input
                type="text"
                placeholder="Enter value"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <div
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Calculate
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeeEstimationCalculator;
