import CategoryFilters from "@/components/category-filters";
import Searchbox from "@/components/ui/search-box";

export default function Home() {
  return (
    <main>
      <Searchbox />
      <CategoryFilters />
    </main>
  );
}
