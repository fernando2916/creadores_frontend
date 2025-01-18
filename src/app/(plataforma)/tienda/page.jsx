import { BannerHeader } from "./components/BannerHeader";
import { Products } from "./components/Products";

export const metadata = {
  title: "Tienda",
};

export default function ProductsPage() {
  return (
    <>
     <BannerHeader/>
     <Products/>
    </>
  );
}
