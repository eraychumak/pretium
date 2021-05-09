import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

import Item from "../components/Item";
import Group from "../components/Group";
import SofaIcon from "../assets/icons/sofa.svg";
import FridgeIcon from "../assets/icons/fridge.svg";
import WashingMachineIcon from "../assets/icons/washingMachine.svg";
import BedIcon from "../assets/icons/bed.svg";
import DeskIcon from "../assets/icons/desk.svg";
import BicycleIcon from "../assets/icons/bicycle.svg";
import MiscIcon from "../assets/icons/misc.svg";
import TruckLoadingIcon from "../assets/icons/truckLoading.svg";

export default function Home() {
  const progressRef = useRef(null);

  const [tab, setTab] = useState(0);
  const [totalVol, setTotalVol] = useState(0.0);
  const [items, setItems] = useState({});

  useEffect(() => {
    const vols = Object.values(items).map(item => item.totalVol);
    const total = vols.reduce((acc, vol) => acc + vol, 0);
    setTotalVol(Math.abs(total).toFixed(2));
  }, [items]);

  useEffect(() => {
    progressRef.current.style.width = `${(totalVol / 34) * 100}%`;
  }, [totalVol]);

  const [whole, decimal] = totalVol.toString().split(".");

  return (
    <>
      <Head>
        <title>Pretium</title>
      </Head>
      <header>
        <h1>{whole}.<span>{decimal}m<sup>3</sup></span></h1>
        <TruckLoadingIcon/>
        <div className="capacity">
          <div className="progress" ref={progressRef}>
            <p className="t35">3.5t</p>
            <p className="t75">7.5t</p>
          </div>
        </div>
      </header>
      <main>
        <nav>
          <button className={`tab ${tab === 0}`} onClick={() => setTab(0)}>
            <SofaIcon/>
            <p>Living Room</p>
            <p>
              ({items?.livingRoom?.itemCount || 0}) {(items?.livingRoom?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 1}`} onClick={() => setTab(1)}>
            <FridgeIcon/>
            <p>Kitchen</p>
            <p>
              ({items?.kitchen?.itemCount || 0}) {(items?.kitchen?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 2}`} onClick={() => setTab(2)}>
            <WashingMachineIcon/>
            <p>Utilities</p>
            <p>
              ({items?.utilities?.itemCount || 0}) {(items?.utilities?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 3}`} onClick={() => setTab(3)}>
            <BedIcon/>
            <p>Bedroom</p>
            <p>
              ({items?.bedroom?.itemCount || 0}) {(items?.bedroom?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 4}`} onClick={() => setTab(4)}>
            <DeskIcon/>
            <p>Office</p>
            <p>
              ({items?.office?.itemCount || 0}) {(items?.office?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 5}`} onClick={() => setTab(5)}>
            <BicycleIcon/>
            <p>Outdoor</p>
            <p>
              ({items?.outdoor?.itemCount || 0}) {(items?.outdoor?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
          <button className={`tab ${tab === 6}`} onClick={() => setTab(6)}>
            <MiscIcon/>
            <p>Miscellaneous</p>
            <p>
              ({items?.misc?.itemCount || 0}) {(items?.misc?.totalVol || 0).toFixed(2)}m<sup>3</sup>
            </p>
          </button>
        </nav>
        <div className="sections">
          <section className={`${tab === 0}`}>
            <Group name="livingRoom" setItems={setItems}>
              <Item name="Sofa Seater 2" vol={1.0}/>
              <Item name="Sofa Seater 3" vol={1.5}/>
              <Item name="Arm Chair" vol={0.7}/>
              <Item name="Carpet" vol={0.2}/>
              <Item name="Ceiling Lamp" vol={0.1}/>
              <Item name="Chandelier" vol={0.1}/>
              <Item name="China Cabinet" vol={1.0}/>
              <Item name="Coat Stand" vol={0.2}/>
              <Item name="Coffee Table" vol={0.4}/>
              <Item name="Corner Sofa" vol={3.0}/>
              <Item name="DVD Player" vol={0.1}/>
              <Item name="Grandfather Clock" vol={0.6}/>
              <Item name="Large Bookcase" vol={0.5}/>
              <Item name="Small Bookcase" vol={0.2}/>
              <Item name="Love Seat" vol={0.8}/>
              <Item name="Painting" vol={0.1}/>
              <Item name="Piano" vol={1.2}/>
              <Item name="Xbox" vol={0.1}/>
              <Item name="Playstation" vol={0.1}/>
              <Item name="Pouffe" vol={0.3}/>
              <Item name="Recliner" vol={0.5}/>
              <Item name="Rug" vol={0.2}/>
              <Item name="Lamp Stand" vol={0.2}/>
              <Item name="Stereo" vol={0.2}/>
              <Item name="TV" vol={0.2}/>
              <Item name="TV Cabinet" vol={0.5}/>
              <Item name="Wall Clock" vol={0.1}/>
            </Group>
          </section>
          <section className={`${tab === 1}`}>
            <Group name="kitchen" setItems={setItems}>
              <Item name="Buffet" vol={1.2}/>
              <Item name="Dining Table for 8" vol={1.2}/>
              <Item name="Dining Table for 6" vol={1.0}/>
              <Item name="Dining Table for 4" vol={0.8}/>
              <Item name="Dining Chair" vol={0.2}/>
              <Item name="Display Cabinet" vol={1.0}/>
              <Item name="High Chair" vol={0.2}/>
              <Item name="Sideboard" vol={1.0}/>
              <Item name="Welsh Dresser" vol={0.8}/>
              <Item name="AGA Cooker" vol={1.0}/>
              <Item name="Bin" vol={0.1}/>
              <Item name="Coffee Machine" vol={0.1}/>
              <Item name="Crockery" vol={0.2}/>
              <Item name="Cupboard" vol={1.0}/>
              <Item name="Cutlery" vol={0.1}/>
              <Item name="Dishwasher" vol={0.5}/>
              <Item name="Freezer" vol={1.0}/>
              <Item name="Fridge" vol={1.0}/>
              <Item name="Kitchen Stool" vol={0.1}/>
              <Item name="Microwave" vol={0.2}/>
              <Item name="Oven" vol={0.5}/>
              <Item name="Pots and Pans" vol={0.2}/>
              <Item name="Stove" vol={0.5}/>
              <Item name="Tea Trolley" vol={0.4}/>
            </Group>
          </section>
          <section className={`${tab === 2}`}>
            <Group name="utilities" setItems={setItems}>
              <Item name="Broom" vol={0.1}/>
              <Item name="Dryer" vol={0.5}/>
              <Item name="Drying Rack" vol={0.2}/>
              <Item name="Ironing Board" vol={0.2}/>
              <Item name="Laundry Basket" vol={0.1}/>
              <Item name="Vacuum Cleaner" vol={0.2}/>
              <Item name="Washing Machine" vol={0.5}/>
            </Group>
          </section>
          <section className={`${tab === 3}`}>
            <Group name="bedroom" setItems={setItems}>
              <Item name="Bedside Table" vol={0.2}/>
              <Item name="Bunk Bed" vol={1.8}/>
              <Item name="Chest of Drawers" vol={0.6}/>
              <Item name="Cot" vol={0.4}/>
              <Item name="Queen Bed" vol={1.8}/>
              <Item name="King Bed" vol={1.6}/>
              <Item name="Double Bed" vol={1.4}/>
              <Item name="Single Bed" vol={1.0}/>
              <Item name="Dressing Table" vol={0.8}/>
              <Item name="Large Mirror" vol={0.3}/>
              <Item name="Small Mirror" vol={0.1}/>
              <Item name="Lloyd Loom Chair" vol={0.4}/>
              <Item name="Tallboy" vol={0.6}/>
              <Item name="Wardrobe 4 Doors" vol={2.0}/>
              <Item name="Wardrobe 3 Doors" vol={1.8}/>
              <Item name="Wardrobe 2 Doors" vol={1.4}/>
              <Item name="Wardrobe 1 Door" vol={1.0}/>
            </Group>
          </section>
          <section className={`${tab === 4}`}>
            <Group name="office" setItems={setItems}>
              <Item name="Computer" vol={0.1}/>
              <Item name="Desk" vol={1.0}/>
              <Item name="Study Chair" vol={0.2}/>
              <Item name="Table Lamp" vol={0.1}/>
            </Group>
          </section>
          <section className={`${tab === 5}`}>
            <Group name="outdoor" setItems={setItems}>
              <Item name="BBQ Large" vol={1.0}/>
              <Item name="BBQ Portable" vol={0.2}/>
              <Item name="Bicycle" vol={0.5}/>
              <Item name="Folding Chair" vol={0.1}/>
              <Item name="Hose Pipe" vol={0.1}/>
              <Item name="Ladder" vol={0.2}/>
              <Item name="Lawn Mower" vol={0.4}/>
              <Item name="Outdoor Table" vol={0.8}/>
              <Item name="Plant" vol={0.1}/>
              <Item name="Stackable Chair" vol={0.2}/>
              <Item name="Sun Lounger" vol={0.3}/>
              <Item name="Tools" vol={0.5}/>
              <Item name="Wheelbarrow" vol={0.6}/>
            </Group>
          </section>
          <section className={`${tab === 6}`}>
            <Group name="misc" setItems={setItems}>
              <Item name="Gym Equipment" vol={0.6}/>
              <Item name="Small Box" vol={0.1}/>
              <Item name="Medium Box" vol={0.1}/>
              <Item name="Large Box" vol={0.2}/>
              <Item name="Pram" vol={0.2}/>
              <Item name="Shoe Rack" vol={0.1}/>
              <Item name="Suitcase Large" vol={0.2}/>
              <Item name="Suitcase Small" vol={0.1}/>
              <Item name="Trunk" vol={0.2}/>
              <Item name="Wine Rack" vol={0.1}/>
            </Group>
          </section>
        </div>
      </main>
    </>
  )
}
