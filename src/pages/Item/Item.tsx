import { Layout } from "../../components/Layout";
import { ItemForm } from "./components/ItemForm";
import { ItemList } from "./components/ItemList";

export const Item = () => {
  return (
    <Layout>
      <ItemList />
      <ItemForm />
    </Layout>
  );
};
