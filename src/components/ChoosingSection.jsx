import { FaUsers } from "react-icons/fa6";
import { PiSmileyFill } from "react-icons/pi";
import { MdShoppingBasket } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

export default function ChoosingSection() {
  return (
    <div className="bg-black text-white items-center flex flex-col">
      <div className="font-semibold text-red-600 py-6">
        <h1>WHY CHOOSE ASHATECH?</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-20 gap-2 pb-6">
        <div className="border-r border-gray-700 pr-20 flex gap-5">
          <div className="text-4xl mt-4 text-red-600">
            <FaUsers />
          </div>
          <div>
            <h1 className="text-4xl font-semibold">10+</h1>
            <h1 className="text-gray-400">Years of Experience</h1>
          </div>
        </div>
        <div className="lg:border-r border-gray-700 pr-20 flex gap-5">
          <div className="text-4xl mt-4 text-red-600">
            <PiSmileyFill />
          </div>
          <div>
            <h1 className="text-4xl font-semibold">100+</h1>
            <h1 className="text-gray-400">Happy Clients</h1>
          </div>
        </div>
        <div className="border-r border-gray-700 pr-20 flex gap-5">
          <div className="text-4xl mt-4 text-red-600">
            <MdShoppingBasket />
          </div>
          <div>
            <h1 className="text-4xl font-semibold">250+</h1>
            <h1 className="text-gray-400">Projects Completed</h1>
          </div>
        </div>
        <div className="pr-20 flex gap-5">
          <div className="text-4xl mt-4 text-red-600">
            <RiCustomerServiceFill />
          </div>
          <div>
            <h1 className="text-4xl font-semibold">24/7</h1>
            <h1 className="text-gray-400">Support Available</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
