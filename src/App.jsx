import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BaiTapThucHanhLayout } from "./BT/BaiTapThucHanhLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BaiTapThucHanhLayout />
    </>
  );
}

export default App;
