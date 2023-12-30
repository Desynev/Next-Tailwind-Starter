import Card from "@/components/Card";
import { Label } from "@/components/Labels";
import React from "react";

const ProductListing = () => {
  return (
    <div className="container bg-slate-100">
      <div className="flex justify-between px-10 py-5">
        <div>
          <h1 className="text-3xl">Batteries</h1>
        </div>

        <div>
          <h1>View All Batteries</h1>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default ProductListing;
