import { React } from "../../deps.ts";
import Hide from "./Hide.tsx";

const Main: any = () => {
  const [hide, setHide] = (React as any).useState(false);
  return (
    <div className="Main">
      <h1>Main</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        autem, placeat sed quibusdam quod cumque magnam, sequi quasi minima
        assumenda nemo aut fugit earum nostrum sint repudiandae error tenetur
        dolor?
      </p>
      <button
        onClick={() => {
          setHide(true);
          console.log(hide);
        }}
      >
        click me
      </button>
      {hide && <Hide />}
      <h1>anotha one does</h1>
    </div>
  );
};

export default Main;
