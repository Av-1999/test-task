import { Layout } from "./components/Layout";
import { SideMenu } from "./components/SideMenu";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <SideMenu />
      <Home />
    </Layout>
  );
}

export default App;
