import { useEffect, useState } from "react";

function App() {
  const [currentVersion, setCurrentVersion] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch("/versions/currentVersion.json");
        const data = await response.json();

        setCurrentVersion(data.version);
      };
      fetchData();
    }, 2000);
  }, [currentVersion]);

  console.log(currentVersion);
  return (
    <div>
      <h1>{currentVersion ? `CURRENT VERSION IS : ${currentVersion}` : ""}</h1>
      <h2>Anmol</h2>
      <h3>Aneja</h3>
    </div>
  );
}
export default App;
