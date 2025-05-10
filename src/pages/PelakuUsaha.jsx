import arrowDown from "../assets/arrow-down.svg";

function PelakuUsaha() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* Title Part */}
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-[25px] font-bold text-gray-900">
              Daftar Pelaku Usaha
            </h3>
          </div>
          <div
            type="button"
            className="py-3 px-4 inline-flex gap-x-2 text-sm font-bold border-2 border-black rounded-lg bg-black text-white hover:bg-gray-200 hover:text-black focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            + Add PU
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-full sm:mx-0 bg-white border border-gray-200 rounded-xl shadow-sm my-4">
          <div className="flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-400 rounded-full" />
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">PT A</h3>
                <p className="text-sm text-gray-500">UMK · Reguler</p>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer">
              <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="px-4 py-3 text-left">
            <p className="text-sm text-gray-500">Certification Target</p>
            <p className="text-lg font-bold text-gray-900">21 Apr 2025</p>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-full sm:mx-0 bg-white border border-gray-200 rounded-xl shadow-sm my-4">
          <div className="flex justify-between items-center px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full" />
              <div className="text-left">
                <h3 className="text-base font-semibold text-gray-900">
                  PT Kuliner Sehat April
                </h3>
                <p className="text-sm text-gray-500">UMK · Reguler</p>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer">
              <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="px-4 py-3 text-left">
            <p className="text-sm text-gray-500">Certification Target</p>
            <p className="text-lg font-bold text-gray-900">21 Apr 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PelakuUsaha;
