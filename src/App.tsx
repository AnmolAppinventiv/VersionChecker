import { useEffect, useState } from "react";

function App() {
  const [currentVersion, setCurrentVersion] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/versions/currentVersion.json");
      const data = await response.json();
      setCurrentVersion(data.version);
    };

    fetchData();
  }, []);

  console.log(currentVersion);
  return (
    <div>
      <h1>{currentVersion ? `CURRENT VERSION IS : ${currentVersion}` : ""}</h1>
      <h2>Anmol</h2>
    </div>
  );
}
export default App;
