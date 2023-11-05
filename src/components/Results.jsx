const Results = ({ account, setStep }) => {
  return (
    <>
      <h1>Results</h1>
      <div className="results-card">
        <span>Name : {account.username}</span>
        <span>Email : {account.email}</span>
        <span>Password : {account.password1}</span>
      </div>

      <button className="btn-submit" onClick={() => setStep(1)}>
        Edit your info
      </button>
    </>
  );
};

export default Results;
