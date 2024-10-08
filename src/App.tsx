import { useEffect } from "react";

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      const response = await fetch("/versions/currentVersion.json");
      const data = await response.json();
      const currentVersion = data.version;

      const previousVersion = localStorage.getItem("previousVersion");

      if (currentVersion && currentVersion !== previousVersion) {
        window.location.reload();
      } else {
        localStorage.setItem("previousVersion", currentVersion);
      }
    };

    const interval = setInterval(checkForUpdates, 3000);
    checkForUpdates(); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <h1>Appinventiv</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor molestias vitae?</p>
    </>
  );
}

export default App;
