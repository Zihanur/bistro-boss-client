import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import orderBanner from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [menu] = useMenu();
  const salads = menu.filter((index) => index.category === "salad");
  const desserts = menu.filter((index) => index.category === "dessert");
  const soups = menu.filter((index) => index.category === "soup");
  const pizzas = menu.filter((index) => index.category === "pizza");
  const drinks = menu.filter((index) => index.category === "drinks");
  const [tabIndex, setTabIndex] = useState(0);
  console.log(salads);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderBanner} title={"order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
