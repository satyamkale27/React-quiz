function Startscreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button>Let's start</button>
    </div>
  );
}

export default Startscreen;
