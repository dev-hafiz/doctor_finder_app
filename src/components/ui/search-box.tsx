import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MapPin, MoveRight } from "lucide-react";

const Searchbox = () => {
  return (
    <div className="bg-image flex justify-center items-center">
      <div>
        <h3 className=" text-xl mb-6 font-semibold lg:text-3xl leading-tight tracking-tight text-gray-900 text-center">
          Find expert Doctors for an In-clinic session here{" "}
        </h3>
        <div className="flex items-center gap-4">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <MapPin
                      size={16}
                      color="#000000"
                      strokeWidth={1}
                      className="mr-1"
                    />
                    Select Location
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <form className="">
              <div className="flex relative">
                <input
                  type="search"
                  id="default-search"
                  className="outline-none  w-full lg:w-[700px] py-2 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#2A542B] focus:border-[#2A542B] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="eg. Doctor, specialisation, clinic name"
                  required
                />
                <MoveRight
                  className="absolute right-2 top-2"
                  strokeWidth={0.75}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
