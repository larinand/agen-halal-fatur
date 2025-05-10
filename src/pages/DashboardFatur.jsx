import {
  IconChevronCompactDown,
  IconUsersGroup,
  IconArrowUpRight,
} from "@tabler/icons-react";
import arrowDown from "../assets/arrow-down.svg";
import ExcelIcon from "../assets/Excel.png";
import ImageIcon from "../assets/Image.png";
import DocsIcon from "../assets/Docs.png";
import PdfIcon from "../assets/Pdf.png";
import FileIcon from "../assets/File Manager.png";
import PlaceHolder from "../assets/placeholder.jpeg";

export default function DashboardFatur() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* Grid */}
        <div className="overflow-x-auto rounded-lg grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconUsersGroup />
              </div>
              <div>
                <p className="text-xs text-gray-500">Officer Count</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                  120
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex text-green-600 gap-x-2">
                <IconArrowUpRight className="inline-block self-center p-1 bg-green-200 rounded-lg" />
                <span className="inline-block text-sm">+18.25%</span>
              </div>
              <span className="text-xs">Increased last month</span>
            </div>
            {/* </div> */}
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconUsersGroup />
              </div>
              <div>
                <p className="text-xs text-gray-500">Officer Count</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                  120
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex text-green-600 gap-x-2">
                <IconArrowUpRight className="inline-block self-center p-1 bg-green-200 rounded-lg" />
                <span className="inline-block text-sm">+18.25%</span>
              </div>
              <span className="text-xs">Increased last month</span>
            </div>
            {/* </div> */}
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconUsersGroup />
              </div>
              <div>
                <p className="text-xs text-gray-500">Officer Count</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                  120
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex text-green-600 gap-x-2">
                <IconArrowUpRight className="inline-block self-center p-1 bg-green-200 rounded-lg" />
                <span className="inline-block text-sm">+18.25%</span>
              </div>
              <span className="text-xs">Increased last month</span>
            </div>
            {/* </div> */}
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconUsersGroup />
              </div>
              <div>
                <p className="text-xs text-gray-500">Officer Count</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                  120
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="flex text-green-600 gap-x-2">
                <IconArrowUpRight className="inline-block self-center p-1 bg-green-200 rounded-lg" />
                <span className="inline-block text-sm">+18.25%</span>
              </div>
              <span className="text-xs">Increased last month</span>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* End Grid */}

        <div>
          {/* Wide Card 1 */}
          <div className="mt-6 w-full">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full flex flex-col">
              {/* Top Section */}
              <div className="flex justify-between items-center px-4 py-6">
                <div className="flex gap-4">
                  {/* Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={PlaceHolder}
                      alt="Follow-up with Jakarta Electronics"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-left text-lg font-semibold text-gray-900">
                        Follow-up with Jakarta Electronics
                      </h3>
                      <div className="text-left text-sm text-gray-500 flex gap-2">
                        <span>April 20</span>
                        <span>|</span>
                        <span>Q2 Lead Conversion</span>
                        <span>|</span>
                        <span>In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center px-3 h-8 align-middle text-sm text-red-700 bg-red-100 rounded-full font-medium">
                    High
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-400 cursor-pointer">
                    <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300"></hr>

              {/* Bottom Section */}
              <div className="flex justify-between items-center p-4">
                <div className="text-sm text-gray-700">
                  <span className="text-lg font-bold text-gray-900">2h</span>{" "}
                  estimated
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-b-2 border-black bg-white rounded-t-lg text-black hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    View Task
                  </div>
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-2 border-black rounded-lg bg-black text-white hover:bg-gray-200 hover:text-black focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    Select Task
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wide Card 1 */}

          {/* Wide Card 2 */}
          <div className="mt-6 w-full">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full flex flex-col">
              {/* Top Section */}
              <div className="flex justify-between items-center px-4 py-6">
                <div className="flex gap-4">
                  {/* Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={PlaceHolder}
                      alt="Follow-up with Jakarta Electronics"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-left text-lg font-semibold text-gray-900">
                        Follow-up with Jakarta Electronics
                      </h3>
                      <div className="text-left text-sm text-gray-500 flex gap-2">
                        <span>April 20</span>
                        <span>|</span>
                        <span>Q2 Lead Conversion</span>
                        <span>|</span>
                        <span>In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center px-3 h-8 align-middle text-sm text-red-700 bg-red-100 rounded-full font-medium">
                    High
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-400 cursor-pointer">
                    <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300"></hr>

              {/* Bottom Section */}
              <div className="flex justify-between items-center p-4">
                <div className="text-sm text-gray-700">
                  <span className="text-lg font-bold text-gray-900">2h</span>{" "}
                  estimated
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-b-2 border-black bg-white rounded-t-lg text-black hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    View Task
                  </div>
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-2 border-black rounded-lg bg-black text-white hover:bg-gray-200 hover:text-black focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    Select Task
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wide Card 2 */}

          {/* Wide Card 3 */}
          <div className="mt-6 w-full">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full flex flex-col">
              {/* Top Section */}
              <div className="flex justify-between items-center px-4 py-6">
                <div className="flex gap-4">
                  {/* Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={PlaceHolder}
                      alt="Follow-up with Jakarta Electronics"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-left text-lg font-semibold text-gray-900">
                        Follow-up with Jakarta Electronics
                      </h3>
                      <div className="text-left text-sm text-gray-500 flex gap-2">
                        <span>April 20</span>
                        <span>|</span>
                        <span>Q2 Lead Conversion</span>
                        <span>|</span>
                        <span>In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Priority Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center px-3 h-8 align-middle text-sm text-red-700 bg-red-100 rounded-full font-medium">
                    High
                  </span>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-gray-400 cursor-pointer">
                    <img src={arrowDown} alt="Arrow Down" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300"></hr>

              {/* Bottom Section */}
              <div className="flex justify-between items-center p-4">
                <div className="text-sm text-gray-700">
                  <span className="text-lg font-bold text-gray-900">2h</span>{" "}
                  estimated
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-b-2 border-black bg-white rounded-t-lg text-black hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    View Task
                  </div>
                  <div
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border-2 border-black rounded-lg bg-black text-white hover:bg-gray-200 hover:text-black focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    Select Task
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wide Card 3 */}
        </div>
        {/* Quick Access Section */}
        <div className="mt-8 w-full">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-lg font-semibold text-black">Quick Access</h2>
            <a href="#" className="text-sm text-blackhover:underline">
              View all
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-[#fafafa] border border-gray-200 rounded-xl p-4 shadow-sm">
              <img src={FileIcon} alt="Excel Icon" className="w-14 h-14 mb-2" />
              <span className="mt-4 text-xs font-bold">Employe Sheet</span>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-[#fafafa] border border-gray-200 rounded-xl p-4 shadow-sm">
              <img src={PdfIcon} alt="Excel Icon" className="w-13 h-13 mb-1" />
              <span className="mt-4 text-xs font-bold">
                Emloyee History.pdf
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-[#fafafa] border border-gray-200 rounded-xl p-4 shadow-sm">
              <img src={DocsIcon} alt="Excel Icon" className="w-12 h-12 mb-2" />
              <span className="mt-4 text-xs font-bold">Final Changes.doc</span>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center bg-[#fafafa] border border-gray-200 rounded-xl p-4 shadow-sm">
              <img
                src={ImageIcon}
                alt="Excel Icon"
                className="w-12 h-12 mb-2"
              />
              <span className="mt-4 text-xs font-bold">Office Setup.img</span>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center bg-[#fafafa] border border-gray-200 rounded-xl p-4 shadow-sm">
              <img
                src={ExcelIcon}
                alt="Excel Icon"
                className="w-12 h-12 mb-2"
              />
              <span className="mt-4 text-xs font-bold">
                Salary Statement.xls
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
