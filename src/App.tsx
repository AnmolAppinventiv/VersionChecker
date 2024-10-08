import { useEffect, useState } from "react";

function App() {
  const [currentVersion, setCurrentVersion] = useState();
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch("/versions/currentVersion.json");
        const data = await response.json();
        setCurrentVersion(data.version);
      };
      fetchData();
    }, 1000);
  }, [currentVersion]);

  console.log(currentVersion);
  return (
    <>
      <h1>{currentVersion ? `CURRENT VERSION IS : ${currentVersion}` : ""}</h1>
      <h2>Hello World</h2>
      <p>Hell</p>
    </>
  );
}
export default App;


//purana version compare krna hai
//