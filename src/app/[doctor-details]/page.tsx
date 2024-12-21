import BioCard from "@/components/bio-card";
import ProfileCard from "@/components/profile-card";

const DetailsPage = () => {
  return (
    <div>
      <ProfileCard />
      <div className="container mx-auto lg:mt-14 mt-72 px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <BioCard />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum
          repellendus fugiat provident, impedit numquam ratione accusantium!
          Dolor vero voluptate facilis consequuntur pariatur officiis,
          voluptatibus, laudantium dolore quis possimus suscipit.
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
