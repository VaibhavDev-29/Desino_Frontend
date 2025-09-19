import { useEffect, useState } from "react";
import Herosection from "./HeroSection";
import PopularProducts from "./PopularProducts";
import BrowserCategory from "./BrowseCategory";
import OffersBanner from "./OffersBanner";
import CustomerReview from "./CustomerReview";
import YouMightAlsoLike from "./YouMightAlsoLike";
import { getAllProducts } from "../../Api/products";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      <p>{err}</p>
      setError("Failed to fetch products... ");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  
  if (loading) {
    return <p className="text-center text-2xl">loading...</p>;
  }
  if (error) {
    return <p className="text-sm text-red-600 "> {error} </p>;
  }

  return (
    <>
      <div className="min-h-screen">
        <Herosection />
        <section className="p-6 ml-10 mr-10">
          <BrowserCategory products={products}/>
        </section>
        <section className="p-3 ml-5 mr-5">
          <PopularProducts products={products} />
          <OffersBanner />
          <CustomerReview />
          <YouMightAlsoLike products={products} />
        </section>
      </div>
    </>
  );
}

export default Home;
