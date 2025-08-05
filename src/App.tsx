import titleImage from "./assets/img/BackgroundTitle.png";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="pl-30 pt-30">
        <h2 className="text-gray-500 text-3xl font-semibold tracking-widest">MOVIE</h2>
        <img src={titleImage} alt="title.png" />
      </div>
    </Layout>
  );
}

export default App;
