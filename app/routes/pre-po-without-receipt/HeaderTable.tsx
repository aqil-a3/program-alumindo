export default function HeaderTable({ isActivated }: { isActivated: boolean }) {
    return (
      <div className={`bg-white shadow-md rounded-lg overflow-hidden ${isActivated ? "block" : "hidden"} mt-4`}>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="header-code" className="text-sm font-medium text-gray-700">Code :</label>
              <input
                type="text"
                name="header-code"
                id="header-code"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="header-ppn"
                id="header-ppn"
                value="header-tax"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
              <label htmlFor="header-ppn" className="text-sm text-gray-700">Tax</label>
              <input
                type="radio"
                name="header-ppn"
                value="header-non-tax"
                id="header-non-ppn"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
              <label htmlFor="header-non-ppn" className="text-sm text-gray-700">None Tax</label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="header-entity" className="text-sm font-medium text-gray-700">Entity :</label>
              <input
                type="text"
                name="header-entity"
                id="header-entity"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="header-branch" className="text-sm font-medium text-gray-700">Branch :</label>
              <input
                type="text"
                name="header-branch"
                id="header-branch"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="header-partner" className="text-sm font-medium text-gray-700">Partner :</label>
              <input
                type="text"
                name="header-partner"
                id="header-partner"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="header-remarks" className="text-sm font-medium text-gray-700">Remarks :</label>
              <input
                type="text"
                name="header-remarks"
                id="header-remarks"
                className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  