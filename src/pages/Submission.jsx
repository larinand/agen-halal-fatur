import { useState } from "react";

function Submission() {
  const [activeTab, setActiveTab] = useState("profil");
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        {/* Title & Breadcrumb */}
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-[25px] font-bold text-gray-900">
              Create New Submission
            </h3>
            <ol className="flex items-center whitespace-nowrap">
              <li className="inline-flex items-center">
                <div className="flex items-center text-sm text-black dark:text-neutral-500">
                  Pelaku Usaha
                </div>
                <svg
                  className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <div className="flex items-center text-sm text-black dark:text-neutral-500">
                  Create
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-neutral-700 mt-4">
          <nav className="flex gap-x-1" role="tablist">
            {[
              { id: "profil", label: "Profil Perusahaan" },
              { id: "section2", label: "Section 2" },
              { id: "section3", label: "Section 3" },
              { id: "section4", label: "Section 4" },
              { id: "section5", label: "Section 5" },
            ].map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-t-lg cursor-pointer
                ${
                  activeTab === tab.id
                    ? "border-b-2 border-black bg-gray-100 text-black"
                    : "text-black hover:bg-gray-200"
                }`}
                role="tab"
              >
                {tab.label}
              </div>
            ))}
          </nav>
        </div>
        {/* Tab Contents */}
        <div className="mt-6">
          {activeTab === "profil" && (
            <div>
              {/* Form 1 */}
              <div className="grid grid-cols-3 gap-6 my-4">
                {/* Left side: title */}
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Profil Perusahaan
                  </h2>
                  <p className="text-sm text-gray-500">Section Description</p>
                </div>

                {/* Right side: form */}
                <div className="col-span-2 space-y-4 text-left mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PIC Perusahaan
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Nama PIC Perusahaan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Kontak PIC
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Kontak PIC Perusahaan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Alamat Perusahaan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor NIB
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="NIB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jenis Produk Perusahaan
                    </label>
                    <div class="relative">
                      <select class="appearance-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm pr-8">
                        <option>Select...</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-right pt-4">
                    <div
                      type="button"
                      className="inline-block bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800 text-sm"
                    >
                      Create Submission
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300 my-7"></hr>

              {/* Form 2 */}
              <div className="grid grid-cols-3 gap-6 my-4">
                {/* Left side: title */}
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Informasi Fasilitas Produksi
                  </h2>
                  <p className="text-sm text-gray-500">
                    Data fasilitas yang digunakan dalam proses produksi
                  </p>
                </div>

                {/* Right side: form */}
                <div className="col-span-2 space-y-4 text-left mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jumlah
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Alamat"
                    />
                  </div>
                  <div className="grid grid-cols-2 items-start gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Keterangan Kelayakan Fasilitas
                      </label>
                      <p className="text-sm text-gray-500">
                        Apakah fasilitas bebas dari bahan babi dan turunannya?
                      </p>
                    </div>

                    <div className="flex space-x-4">
                      <div
                        type="button"
                        className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Ya
                      </div>
                      <div
                        type="button"
                        className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Tidak
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300 my-7"></hr>

              {/* Form 3 */}
              <div className="grid grid-cols-3 gap-6 my-4">
                {/* Left side: title */}
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Informasi Produksi & Sertifikasi
                  </h2>
                  <p className="text-sm text-gray-500">
                    Detail produk dan sertifikasi halal yang diajukan
                  </p>
                </div>

                {/* Right side: form */}
                <div className="col-span-2 space-y-4 text-left mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jumlah Produk / Menu
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jenis Sertifikasi Halal yang Diajukan
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Contoh: Self Declare / Regular / Luar Negeri"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status Sertifikasi Halal Sebelumnya
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="Contoh: Belum Pernah / Sudah Sertifikasi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jumlah Bahan Baku yang Digunakan
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300 my-7"></hr>

              {/* Form 4 */}
              <div className="grid grid-cols-3 gap-6 my-4">
                {/* Left side: title */}
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-900">
                    SDM & Legenda Halal
                  </h2>
                  <p className="text-sm text-gray-500">
                    Masukkan info SDM dan Penyedia Sertifikasi Halal
                  </p>
                </div>

                {/* Right side: form */}
                <div className="col-span-2 space-y-4 text-left mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Jumlah SDM Produksi
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="0"
                    />
                  </div>
                  <div className="grid grid-cols-5 items-start gap-4 my-7">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Penyedia Halal
                      </label>
                      <p className="text-sm text-gray-500">
                        Pilih penyedia sertifikasi halal yang digunakan
                      </p>
                    </div>

                    <div className="flex col-span-3 space-x-4">
                      <div
                        type="button"
                        className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      >
                        BPJH
                      </div>
                      <div
                        type="button"
                        className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Lembaga Sertifikasi Halal (LSH)
                      </div>
                      <div
                        type="button"
                        className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Luar Negeri
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Kapasitas Produksi
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <hr className="border border-gray-300 my-7"></hr>

              {/* Form 5 */}
              <div className="grid grid-cols-3 gap-6 my-4">
                {/* Left side: title */}
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Target Sertifikasi
                  </h2>
                  <p className="text-sm text-gray-500">
                    Pilih Target Waktu Sertifikasi Halal
                  </p>
                </div>

                {/* Right side: form */}
                <div className="col-span-2 space-y-4 text-left mb-7">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Target Tanggal Sertifikasi
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "section2" && <div>This is Section 2 content.</div>}
          {activeTab === "section3" && <div>This is Section 3 content.</div>}
          {activeTab === "section4" && <div>This is Section 4 content.</div>}
          {activeTab === "section5" && <div>This is Section 5 content.</div>}
        </div>
      </div>
    </div>
  );
}

export default Submission;
