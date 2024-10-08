import { useEffect, useState } from "react";

function App() {
  const [currentVersion, setCurrentVersion] = useState();
  useEffect(() => {
    setTimeout(() => {
      const data = async () => {
        const response = await fetch("/versions/currentVersion.json");
        const data = await response.json();
        setCurrentVersion(data.version);
      };
      data();
    }, 0);
  }, []);

  console.log(currentVersion);
  return (
    <>
      <h1>{currentVersion ? `CURRENT VERSION IS : ${currentVersion}` : ""}</h1>
      <h6>Appinventiv</h6>
    </>
  );
}
export default App;

//purana version compare krna hai
//