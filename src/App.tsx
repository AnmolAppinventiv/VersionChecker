import { useEffect, useState } from "react";

function App() {
  const [currentVersion, setCurrentVersion] = useState();
  const [previousVersion, setPreviousVersion] = useState();
  useEffect(() => {
    setTimeout(() => {
      const data = async () => {
        const response = await fetch("/versions/currentVersion.json");
        const data = await response.json();
        setCurrentVersion(data.version);
      };
      if (currentVersion && previousVersion && currentVersion !== previousVersion) {
        window.location.reload();
      } else {
        data();
      }
    }, 0);
  }, [currentVersion]);

  console.log(currentVersion);
  return (
    <>
      <h1>{currentVersion ? `CURRENT VERSION IS : ${currentVersion}` : ""}</h1>
      <h6>Appinventiv</h6>
    </>
  );
}
export default App;

//purana version new version se compare krna hai 
// agr difference hua toh page apne aap reload krwana hai 