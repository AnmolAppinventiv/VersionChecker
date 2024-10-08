import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data = async () => {
      const response = await fetch("/versions/currentVersion.json");
      const data = await response.json();
      const currentVersion = data.version;
      const previousVersion = localStorage.getItem("previousVersion");

      if (previousVersion && previousVersion != currentVersion) {
        localStorage.setItem("previousVersion", currentVersion);
        window.location.reload();
      } else if (!previousVersion) {
        localStorage.setItem("previousVersion", currentVersion);
      }
    };
    data();
  }, []);

  return (
    <>
      <h1>Appinventiv</h1>
      <h2>ram ram</h2>
    </>
  );
}

export default App;
