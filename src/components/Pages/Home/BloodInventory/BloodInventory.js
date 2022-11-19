import React from "react";
import SingleBlood from "../SingleBlood/SingleBlood";
import inventoryBg from "../../../assets/worldMapbg.png";
import redDrop from "../../../assets/icon-inventory-drop-nomask.svg";
import grayDrop from "../../../assets/icon-inventory-drop.svg";
import { Link } from "react-router-dom";

const BloodInventory = () => {
  return (
    <div className="mt-10">
      <div style={{ backgroundImage: `url(${inventoryBg})` }}>
        <h2 className="pt-16 text-5xl font-bold text-gray-700">
          National blood inventory
        </h2>
        <p className="lg:px-64 pt-10 pb-20 text-lg">
          We manage the national supply of blood products for all the provinces
          and territories (excluding Quebec). Many variables can impact our
          inventory such as weather, holidays or tragic events. Below is an
          overview of our inventory levels across all blood types.
        </p>
        <div className="lg:flex justify-center items-start grid grid-cols-3 lg:gap-y-0 gap-y-10">
          <SingleBlood
            bloodGroup="AB+"
            days="13"
            bloodDrop={grayDrop}
            tooltip="When the Inventory is over 10 days, AB+ is needed less. When the Inventory for AB+ is below 8 days, AB+ is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="AB-"
            days="8"
            bloodDrop={grayDrop}
            tooltip="When the Inventory for AB- is below 8 days, AB- is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="A+"
            days="6"
            bloodDrop={redDrop}
            tooltip="When the Inventory for A+ is below 8 days, A+ is needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="A-"
            days="4"
            bloodDrop={redDrop}
            tooltip="When the Inventory for A- is below 8 days, A- is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="B+"
            days="9"
            bloodDrop={grayDrop}
            tooltip="When the Inventory is over 10 days, B+ is needed less. When the Inventory for B+ is below 8 days, B+ is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="B-"
            days="5"
            bloodDrop={redDrop}
            tooltip="When the Inventory for B- is below 8 days, B- is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="O+"
            days="5"
            bloodDrop={redDrop}
            tooltip="When the Inventory for O+ is below 8 days, O+ is especially needed."
          ></SingleBlood>
          <SingleBlood
            bloodGroup="O-"
            days="3"
            bloodDrop={redDrop}
            tooltip="When the Inventory for O- is below 8 days, O- is especially needed."
          ></SingleBlood>
        </div>
      </div>
      <div className="mt-36 mb-10">
        <Link
          className="underline hover:no-underline text-xl text-red-600 hover:text-red-800"
          to="/find-a-donor"
        >
          Find a donor center
        </Link>
      </div>
    </div>
  );
};

export default BloodInventory;
