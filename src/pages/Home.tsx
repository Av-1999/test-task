import titleImage from "../assets/img/BackgroundTitle.png";
import { Button } from "../components/Button";

function Home() {
  return (
    <div className="px-30 pt-30 text-white">
      <h2 className="text-gray-500 text-3xl font-semibold tracking-widest">
        MOVIE
      </h2>
      <img src={titleImage} alt="title.png" />

      <p className="text-3xl my-4 font-light">2021 18+ 1h 48m</p>
      <p className="max-w-[700px] text-3xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        pariatur suscipit aut odio sunt consequatur repellendus. Officiis
        repudiandae accusantium illo delectus ducimus adipisci culpa molestias
        voluptatem totam, aperiam minus. Minima.
      </p>

      <div className="flex gap-3 mt-7">
        <Button text="▶ Play" />
        <Button mode="dark" text="More Info" />
      </div>
    </div>
  );
}

export default Home;
