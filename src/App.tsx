import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data = async () => {
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

    data();
  }, []);

  return (
    <>
      <h6>Appinventiv</h6>
    </>
  );
}

export default App;
