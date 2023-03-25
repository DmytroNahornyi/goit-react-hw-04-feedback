import React, { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';
import { FeedbackContainer } from './Feedback/Feedback.styled';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) =>
  setFeedback((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <FeedbackContainer>
      <h1>Please leave feedback</h1>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
        colors={['green', 'gray', 'red']}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackContainer>
  );
};

export default App;