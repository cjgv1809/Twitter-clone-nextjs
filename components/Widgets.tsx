import React from "react"
import { SearchIcon } from "@heroicons/react/outline"
import { TwitterTimelineEmbed } from "react-twitter-embed"

function Widgets() {
  return (
    <div className="hidden col-span-2 px-2 mt-2 lg:inline">
      <div className="flex items-center p-3 mt-2 mb-4 space-x-2 bg-gray-100 rounded-full mb-">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        borderColor="#00ADED"
        onLoad={function noRefCheck() {}}
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 1000 }}
        noScrollbar
      />
    </div>
  )
}

export default Widgets
