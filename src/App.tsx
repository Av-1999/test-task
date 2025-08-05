import { Layout } from "./components/Layout";
import { SideMenu } from "./components/SideMenu";
import Home from "./pages/Home";

function App() {
  return (
    <Layout className="relative">
      <div className="w-full h-full group-hover:bg-black absolute" />

      <SideMenu />
      <Home />
    </Layout>
  );
}

export default App;
