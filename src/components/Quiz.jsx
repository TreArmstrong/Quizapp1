import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import './Quiz.css'; // Import your CSS for styling

const Quiz = () => {
  const [topic, setTopic] = useState('golang');
  const [expertiseLevel, setExpertiseLevel] = useState('novice');
  const [questionCount, setQuestionCount] = useState(5);
  const [questionStyle, setQuestionStyle] = useState('normal');
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setLoading(true); // Set loading state to true when the form is submitted

    try {
      const response = await axios.post('/generate-trivia', {
        topic,
        expertiseLevel,
        questionCount,
        questionStyle,
      });
      setQuiz(response.data);
    } catch (error) {
      console.error('Error generating quiz:', error);
    } finally {
      setLoading(false); // Set loading to false once the API call is done
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Generation Options</h1>
      <p>Please choose your preferences below to generate your personalized quiz</p>
      <form id="quiz-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quiz-topic">Topic</label>
          <select
            id="quiz-topic"
            name="quiz-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="golang">Golang</option>
            <option value="aws">AWS</option>
            <option value="javascript">Javascript</option>
            <option value="ci-cd">CI/CD</option>
            <option value="home-gardens">Home Gardens</option>
            <option value="coffee">Coffee</option>
            <option value="finger-foods">Finger Foods</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="expertise">Expertise</label>
          <select
            id="expertise"
            name="expertise"
            value={expertiseLevel}
            onChange={(e) => setExpertiseLevel(e.target.value)}
          >
            <option value="novice">Novice</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="number-of-questions">Number of Questions</label>
          <select
            id="number-of-questions"
            name="number-of-questions"
            value={questionCount}
            onChange={(e) => setQuestionCount(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="style-of-questions">Style of Questions</label>
          <select
            id="style-of-questions"
            name="style-of-questions"
            value={questionStyle}
            onChange={(e) => setQuestionStyle(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="master-oogway">Master Oogway</option>
            <option value="1940-gangster">1940's Gangster</option>
            <option value="8year-old">Like I am an 8 Year Old</option>
            <option value="jedi">Jedi</option>
            <option value="jack-sparrow">Captain Jack Sparrow</option>
            <option value="matthew-mcconaughey">Matthew McConaughey</option>
          </select>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>

      {/* Render loading spinner */}
      {loading && <div className="loading-spinner">Loading...</div>}

      {/* Render quiz data once it is generated */}
      {quiz && (
        <div className="quiz-result">
          <h2>Your Quiz</h2>
          <pre>{JSON.stringify(quiz, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Quiz;

