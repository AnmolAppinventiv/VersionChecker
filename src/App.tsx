import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data = async () => {
      const response = await fetch("/versions/currentVersion.json");
      const data = await response.json();
      const currentVersion = data.version;
      const previousVersion = localStorage.getItem("previousVersion");

      if (currentVersion && currentVersion !== previousVersion) {
        setTimeout(() => {
            window.location.reload();
            localStorage.setItem("previousVersion", currentVersion);
        }, 2000);
      } else {
        localStorage.setItem("previousVersion", currentVersion);
      }
    };
    data(); 
  }, []);

  return (
    <>
      <h1>Appinventiv</h1>
    </>
  );
}

export default App;