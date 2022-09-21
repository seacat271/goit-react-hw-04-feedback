import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification"


const FeedbackCounter =() => {
const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});


const feedbackIncrement = (stateKind) => {
  setFeedback(prevState => {
    return {
      ...feedback,
     [stateKind]: prevState[stateKind] + 1,
    };
  });
};

const countTotalFeedback = () => {
  return Object.values(feedback).reduce((acc, item) => acc + item, 0);
};

const countPositiveFeedbackPercentage = () => {
  return (
    Math.round((feedback.good * 100) / countTotalFeedback()) + '%'
  );
};


return (<>
  <Section title = "Please leave feedback" >
      <FeedbackOptions
          onLeaveFeedback = {feedbackIncrement}
          options = {Object.keys(feedback)}
      />
  </Section>
      <Section title = "Statistic" >
          {countTotalFeedback()
          ? <Statistics 
          good={feedback.good} 
          neutral={feedback.neutral}
          bad = {feedback.bad}
          total={countTotalFeedback()}
          positivePercentage = {countPositiveFeedbackPercentage()}/>
          : <Notification
          message="There is no feedback"/>}
      </Section>
    </>)


  };
  


  
export default FeedbackCounter;


