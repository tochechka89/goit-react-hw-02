import { useEffect, useState } from "react"

import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"




const App = () => {
  const [checkFeed, setCheckFeed] = useState(() => {
    const savedFeed = localStorage.getItem('check-feedbacks');
    if (savedFeed) {
      return JSON.parse(savedFeed);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

   const updateFeedback = feedbackType => {
    setCheckFeed({
      ...checkFeed,
      [feedbackType]: checkFeed[feedbackType] + 1,
    });
  };

const resetFeedback = () => {
    setCheckFeed({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

   useEffect(() => {
    localStorage.setItem('check-feedbacks', JSON.stringify(checkFeed));
  }, [checkFeed]);

  const totalFeedback = checkFeed.good + checkFeed.neutral + checkFeed.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((checkFeed.good / totalFeedback) * 100)
    : 0;
  
  return (
   <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback check={checkFeed} positive={positiveFeedback} />
      ) : (
          <Notification />
      )}
    </>
    
  );
}

export default App;