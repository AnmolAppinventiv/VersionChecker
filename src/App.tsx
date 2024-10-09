import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data = async () => {
      const response = await fetch("/versions/currentVersion.json");
      const data = await response.json();
      debugger;
      const currentVersion = data.version;
      const previousVersion = localStorage.getItem("previousVersion");
      if (previousVersion && previousVersion != currentVersion) {
        localStorage.setItem("previousVersion", currentVersion);
        // window.location.reload();
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
      <p>hogya kya shayad</p>
      <h1>hello</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsam unde ullam?</p>
    </>
  );
}

export default App;
