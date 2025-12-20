import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import AreaChartSection from "../components/AreaChartSection";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded bg-green-50 p-2 md:block">
          <HiOutlineShoppingCart className="h-12 w-12 text-green-500" />
          <div className="flex w-full items-center justify-between gap-2 px-2">
            <p className="text-md cursor-default">New Orders</p>
            <p className="cursor-default text-lg font-bold">5</p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2 rounded bg-purple-50 p-2 md:block">
          <HiOutlineShoppingBag className="h-12 w-12 text-purple-500" />
          <div className="flex w-full items-center justify-between gap-2 px-2">
            <p className="text-md cursor-default">Products</p>
            <p className="cursor-default text-lg font-bold">110</p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2 rounded bg-orange-50 p-2 md:block">
          <HiOutlineUserGroup className="h-12 w-12 text-orange-500" />
          <div className="flex w-full items-center justify-between gap-2 px-2">
            <p className="text-md cursor-default">Users</p>
            <p className="cursor-default text-lg font-bold">312</p>
          </div>
        </div>
      </div>
      <AreaChartSection />
    </>
  );
}

export default Dashboard;
