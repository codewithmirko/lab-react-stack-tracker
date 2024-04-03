function HomePage({ companies }) {
  console.log({ companies });
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {companies &&
        companies.map((currentCompany) => {
          return (
            <div key={currentCompany.id}>
              <h1>{currentCompany.name}</h1>
              <img src="#" alt="" />
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
