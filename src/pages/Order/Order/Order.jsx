import Cover from "../../Shared/Cover/Cover";
import orderBanner from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [menu] = useMenu();
  const salads = menu.filter(index=> index.category === 'salad')
  console.log(salads)
  return (
    <div>
      <Cover img={orderBanner} title={"order food"}></Cover>
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
