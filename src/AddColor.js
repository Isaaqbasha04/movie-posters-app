import { useState } from "react";

export function AddColor() {
  const [color, setColor] = useState("deepskyblue");
  const styles = {
    backgroundColor: color,
  };

  const INTIAL_COLOR_LIST = ["deepskyblue", "orange", "crimson"];
  const [colorList, setColorList] = useState(INTIAL_COLOR_LIST);
  return (
    <div>
      <input value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles} placeholder="Enter a color" />

      <button onClick={() => setColorList([...colorList, color])}>AddColor</button>

      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}

    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}>

  </div>;
}
