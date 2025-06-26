"use client";
import { useState } from "react";

const Notification = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(true);
    setTimeout(() => {
      setIsUpdate(false);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 relative">
        {isUpdate && (
          <div className="px-6 py-2 text-gray-700 bg-gray-300 rounded-lg absolute z-50 left-1/2 top-0 transform -translate-x-1/2 mt-2">
            {" "}
            <h1>Updated Successfully!</h1>
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>
        {/* Notification Settings Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notifications Preferences
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Notifications
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                SMS Notifications
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Push Notifications
              </label>
              <select className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Enable</option>
                <option value="">Disable</option>
              </select>
            </div>
          </div>
        </div>
        {/* Actions settings */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Notification;
