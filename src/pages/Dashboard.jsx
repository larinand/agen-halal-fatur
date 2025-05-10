import React from "react";
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconUsersGroup,
  IconCircleCheck,
  IconMoon,
} from "@tabler/icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
// import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";

import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import DropDown from "../components/common/DropDown";
import ActivityFeed from "../components/common/ActivityFeed";

export default function Dashboard() {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* <!-- Card --> */}
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

          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconCircleCheck />
              </div>
              <div>
                <p className="text-xs text-gray-500">Active Officers</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                  60
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="flex text-green-600 gap-x-2">
                <IconArrowUpRight className="inline-block self-center p-1 bg-green-200 rounded-lg" />
                <span className="inline-block text-sm">+22.40%</span>
              </span>
              <span className="text-xs">Increased last month</span>
            </div>
            {/* </div> */}
          </div>

          <div className="flex flex-col gap-y-2 md:gap-y-3 p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
            <div className="flex items-center gap-x-3">
              <div className="bg-blue-200 text-blue-600 p-2.5 rounded-lg">
                <IconMoon />
              </div>
              <div>
                <p className="text-xs text-gray-500">Idle Officers</p>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-80">
                  60
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="flex text-red-600 gap-x-2">
                <IconArrowDownRight className="inline-block self-center p-1 bg-red-200 rounded-lg" />
                <span className="inline-block text-sm">-5.12%</span>
              </span>
              <span className="text-xs">Decreased last month</span>
            </div>
            {/* </div> */}
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div className="p-2 md:p-3 bg-white border border-gray-200 shadow-2xs rounded-lg">
          <div className="font-semibold leading-none pb-3 text-lg">
            <p>Daily Agent Route Analysis</p>
          </div>
          <div className="p-2 md:p-3 w-full h-[600px] bg-white border border-gray-200 shadow-2xs rounded-lg">
            <MapContainer
              center={[-5.34, 105.27]}
              zoom={7}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker> */}
            </MapContainer>
          </div>
        </div>
        {/* <!-- End Card --> */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div className="p-4 md:p-5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div className=" leading-none pb-3">
              <p className="font-semibold text-lg">Certification Progress</p>
              <div className="flex justify-between">
                <p>Breakdown of field progress this week</p>
                {/* <DropDown /> */}
              </div>
            </div>
            <div className="h-full w-full">
              <PieChart />
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div className=" leading-none pb-3">
              <p className="font-semibold text-lg">Recent Activities</p>
            </div>
            <ActivityFeed />
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div className=" leading-none pb-3">
              <p className="font-semibold text-lg">Top Certificate Category</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">
                    500
                  </p>
                  <div className=" text-green-600 gap-x-2">
                    <svg
                      className="inline-block size-6 self-center p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span className="inline-block text-sm">+32.40%</span>
                  </div>
                </div>
                {/* <DropDown /> */}
              </div>
            </div>
            <div className="h-full w-full">
              <BarChart />
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
      </div>
    </div>
  );
}
