import men from "/men.jpg";
import riya from "/riya.png";
import goggle from "/goggle.png";
import shoes from "/shoes.png";
import shoe2 from "/shoe2.png";

export default function Hero() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-10 mr-10 ">
        {/* Main Hero Section */}
        <div className="relative col-span-2 bg-gradient-to-br from-blue-400 to-orange-300 p-8 rounded-3xl flex flex-col justify-between h-[600px]">
          <div className="mt-10 ml-8">
            <h1 className="text-7xl font-bold text-white font-serif">
              <div className="flex flex-col">
                <span>Summer</span>
                <span>Arrival of</span>
                <span>Outfit</span>
              </div>
            </h1>
            <span className="mt-4 text-white text-xl">
              <div className="flex flex-col">
                <span>From stunning designs to standout products— Desino</span>
                <span> brings you creative fashion and lifestyle pieces</span>
                <span>you'll love to own.</span>
              </div>
            </span>
            <button className="mt-6 pr-10 py-2 bg-black text-white rounded-3xl hover:bg-gray-900 w-70">
              Explore Product
            </button>
          </div>
          <div className="absolute top-4 right-4 text-right mt-4 mr-3">
            <span className="text-5xl font-bold text-white">
              50%
              <br />
              OFF
            </span>
          </div>
          {/* Add image */}
          <img
            src={riya}
            alt="Model"
            className="absolute bottom-0 right-0 w-1/2 object-cover h-[600px]"
          />
        </div>

        {/* Side Top Portrait */}
        <div className="bg-white rounded-3xl overflow-hidden relative h-[600px]">
          <img
            src={men}
            alt="Model 2"
            className="w-full  object-cover h-full"
          />
        </div>

        {/* Bottom Cards */}
        <div className="col-span-3 grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-200 p-4 flex items-center justify-between h-50 rounded-4xl relative">
            <div className="">
              <h2 className="font-medium text-3xl flex flex-col ml-10 absolute">
                <span>Trendy</span>
                <span>Sunglass</span>
              </h2>
            </div>
            <img src={goggle} alt="Sunglasses" className="h-50  absolute ml-60" />
          </div>
          <div className="bg-orange-100 p-4 flex items-center justify-between rounded-4xl h-50 relative">
            <div>
              <h2 className="font-medium text-3xl flex flex-col ml-10  absolute">
                <span>Popular</span>
                <span>Shoes</span>
              </h2>
            </div>
            <img src={shoes} alt="Shoes" className=" h-50  absolute ml-35" />
            <img src={shoe2} alt="Shoes" className=" h-50  absolute ml-95" />
          </div>
        </div>
      </div>
    </section>
  );
}
