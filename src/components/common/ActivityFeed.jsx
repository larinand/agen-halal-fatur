import React, { Component } from "react";

class ActivityFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "activity",
      activities: [
        {
          id: 1,
          project: "Android app development",
          description: "Rachel Green added a new task in iOS app development",
          timeAgo: "1 hour ago",
        },
        {
          id: 2,
          project: "Website Redesign",
          description: "Monica Geller updated the homepage layout",
          timeAgo: "2 hours ago",
        },
        {
          id: 3,
          project: "Database Migration",
          description: "Ross Geller completed the data migration task",
          timeAgo: "3 hours ago",
        },
      ],
    };
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderActivities() {
    return this.state.activities.map((activity) => (
      <div key={activity.id} className="last:border-b-0">
        <div className="flex justify-between p-2 bg-gray-100 mb-1 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">{activity.project}</h3>
            <p className="text-sm text-gray-500">{activity.description}</p>
          </div>
          <span className="text-sm text-gray-500">{activity.timeAgo}</span>
        </div>
      </div>
    ));
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="min-w-full mx-auto bg-white rounded-lg">
        {/* Tab Navigation */}
        <div className="grid grid-cols-2">
          <button
            className={`px-6 py-3 font-medium focus:outline-none ${
              activeTab === "activity"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => this.handleTabChange("activity")}
          >
            Activity
          </button>
          <button
            className={`px-6 py-3 font-medium focus:outline-none ${
              activeTab === "update"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => this.handleTabChange("update")}
          >
            Update
          </button>
        </div>

        {/* Activity List */}
        <div className="py-4">
          {activeTab === "activity" ? (
            this.renderActivities()
          ) : (
            <div className="text-center py-4 text-gray-500">
              No updates available
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
