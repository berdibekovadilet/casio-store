import { Button } from "components";
import Layout from "layout/Layout";

function App() {
  return (
    <div className="container">
      <Layout>
        <Button appearance="secondary">Proceed to Checkout</Button>
        <Button appearance="primary" icon="right">
          See all
        </Button>
      </Layout>
    </div>
  );
}

export default App;
