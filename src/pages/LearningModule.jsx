import arrowDown from "../assets/arrow-down.svg";

function LearningModule() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* Card */}
        <div className="w-full max-w-full sm:mx-0 bg-white border border-gray-200 rounded-xl shadow-sm my-4">
          <div className="flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  Pengenalan Module
                </h3>
              </div>
            </div>
            <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-full sm:mx-0 bg-white border border-gray-200 rounded-xl shadow-sm my-4">
          <div className="flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  Perkenalan Progressive Web Apps
                </h3>
              </div>
            </div>

            <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningModule;
