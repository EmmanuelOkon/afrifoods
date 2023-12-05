import React from "react";
import Layout from "../components/layout";
import { termOfService } from "../utils/data";

const TermOfService = () => {
  return (
    <Layout>
      <div className="pt-10 mx-auto max-w-7xl px-4 pb-8">
        <h1 className="text-center text-green text-2xl font-bold">AFRI-FOODS WEBSITE TERMS AND CONDITIONS</h1>
        {termOfService.map((item) => (
          <div key={item.text} className="py-2">
            <span className="font-semibold text-lg">{item.text.title}</span>
            <p className="text-[14px] md:text-[16px] text-justify text-greyBlack">{item.text.description}</p>
          </div>
        ))}
      </div>
    </Layout> 
  );
};

export default TermOfService;
