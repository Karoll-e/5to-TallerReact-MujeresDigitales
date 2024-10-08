import React from "react";
import ProfileCard from "./Components/01-ClassName/ProfileCard";
import ProductCard from "./Components/02-StyleComponents/ProductCard";
import Card from "./Components/03-CSSModules/Card";
import Header from "./Components/04-Tailwind/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="tw-flex tw-flex-col tw-ustify-center tw-items-center  tw-min-h-screen">
        <ProfileCard />
        <ProductCard />
        <Card />
      </div>
    </div>
  );
};

export default App;
