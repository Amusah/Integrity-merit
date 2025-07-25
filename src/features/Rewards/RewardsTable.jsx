import React, { useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { MdReport, MdPendingActions, MdEmojiEvents } from "react-icons/md";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { incidentReports, rewardsData } from "../..";
import StatusBadge from "../../components/StatusBadge";

const cards = [
  {
    label: "Total Reports",
    count: 10,
    icon: <MdReport className="text-2xl md:text-3xl" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Pending Reports",
    count: 1,
    icon: <MdPendingActions className="text-2xl md:text-3xl" />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Total Rewards",
    count: 5,
    icon: <MdEmojiEvents className="text-2xl md:text-3xl" />,
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Approved Rewards",
    count: 2,
    icon: <FaCheckCircle className="text-2xl md:text-3xl" />,
    color: "bg-green-100 text-green-600",
  },
];

function RewardsTable() {
  const [activeTab, setActiveTab] = useState("incident");

  return (
    <>
      <div className="space-y-8 md:space-y-10 mt-[5rem]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
          <div>
            <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3">
              Rewards & Punishment
            </h1>
            <p className="text-gray-600 text-sm md:text-lg lg:text-xl">
              Track employee rewards for whistleblowing, incident reporting, and
              integrity maintenance
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 md:gap-6">
            <div className="flex items-center gap-2 border-2 border-gray-400 px-3 py-2 md:px-4 md:py-3 rounded-md">
              <BiSearch className="text-lg md:text-xl" />
              <input
                type="text"
                placeholder="Search employees, department ..."
                className="outline-none text-sm md:text-base"
              />
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-400 px-3 py-2 md:px-4 md:py-3 rounded-md">
              <BiFilter className="text-lg md:text-xl" />
              <p className="text-sm md:text-base">Filter</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 rounded-lg shadow-sm ${card.color} flex gap-4 md:gap-6 items-center`}
            >
              <div>{card.icon}</div>
              <div>
                <p className="text-sm md:text-base lg:text-lg">{card.label}</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {card.count}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-2 md:p-3 mb-8">
          <button
            onClick={() => setActiveTab("incident")}
            className={`flex-1 py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium rounded-md transition-colors ${
              activeTab === "incident"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Incident Reports
          </button>
          <button
            onClick={() => setActiveTab("rewards")}
            className={`flex-1 py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium rounded-md transition-colors ${
              activeTab === "rewards"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Rewards & Recognition
          </button>
        </div>

        {/* Table Content */}
        {activeTab === "incident" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm md:text-base lg:text-lg">
                <thead className="text-left text-gray-500 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-medium">Reporter</th>
                    <th className="px-6 py-4 font-medium">Department</th>
                    <th className="px-6 py-4 font-medium">Incident Type</th>
                    <th className="px-6 py-4 font-medium">Description</th>
                    <th className="px-6 py-4 font-medium">Location</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {incidentReports.map((r, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 md:gap-4">
                          <img
                            src={r.reporter.image}
                            alt=""
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-sm md:text-base lg:text-lg">
                              {r.reporter.name}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">
                              {r.reporter.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{r.department}</td>
                      <td className="px-6 py-4">{r.type}</td>
                      <td className="px-6 py-4 max-w-[180px] md:max-w-[250px] truncate">
                        {r.description}
                      </td>
                      <td className="px-6 py-4">{r.location}</td>
                      <td className="px-6 py-4">
                        {new Date(r.date).toDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge bg={r.status.toLowerCase()}>
                          {r.status}
                        </StatusBadge>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-sm md:text-base text-blue-600 hover:underline">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm md:text-base lg:text-lg">
                <thead className="text-left text-gray-500 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 font-medium">Employee</th>
                    <th className="px-6 py-4 font-medium">Department</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Category</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Date Awarded</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rewardsData.map((reward, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 md:gap-4">
                          <img
                            src={reward.employee.image}
                            alt=""
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-sm md:text-base lg:text-lg">
                              {reward.employee.name}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500">
                              {reward.employee.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{reward.department}</td>
                      <td className="px-6 py-4">
                        <StatusBadge bg={reward.type.toLowerCase()}>
                          {reward.type}
                        </StatusBadge>
                      </td>
                      <td className="px-6 py-4">{reward.category}</td>
                      <td className="px-6 py-4 font-medium">{reward.amount}</td>
                      <td className="px-6 py-4">
                        {new Date(reward.dateAwarded).toDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge bg={reward.status.toLowerCase()}>
                          {reward.status}
                        </StatusBadge>
                      </td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-2 text-sm md:text-base text-blue-600 hover:underline">
                          <FaEye size={14} className="md:text-base" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RewardsTable;
