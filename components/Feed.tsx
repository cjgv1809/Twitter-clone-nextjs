import { RefreshIcon } from "@heroicons/react/outline"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { Tweet as TweetTypes } from "../typings"
import { fetchTweets } from "../utils/fetchTweets"
import Tweet from "./Tweet"
import TweetBox from "./TweetBox"

interface Props {
  tweets: TweetTypes[]
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<TweetTypes[]>(tweetsProp)

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...")

    const tweets = await fetchTweets()
    setTweets(tweets)

    toast.success("Feed Updated", {
      id: refreshToast,
    })
  }

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 mt-5 mr-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
