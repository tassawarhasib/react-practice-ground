import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import "./styles.css";

export default function App() {

  const [liked, setLiked] = useState(false);
  const [isFetchting, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch("https://www.greatfrontend.com/api/questions/like-button", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: liked ? "unlike" : "like"
        })
      })
      const responseData = await response.json();
      console.log(responseData);

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        setError(responseData.message)
        return;
      }

    } finally {
      setIsFetching(false);
    }

  }

  return (
    <div>
      <button
        disabled={isFetchting}
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={handleLikeUnlike}>
        {isFetchting ? <SpinnerIcon /> : <HeartIcon />} {liked ? "Liked" : "Like"}
      </button>

      {error && <div className="error">{error}</div>}
    </div>
  );
}
