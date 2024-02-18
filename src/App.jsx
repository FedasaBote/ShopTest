import Header from "./header";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import "./App.css";
import Sponsors from "./sponsors";
import CarouselSimple from "./slickCarousel";

const ITEMS = [
  {
    name: "Headphone",
    price: 1000,
    category: "Electronics",
    _alt: "headphone",
    _url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1603842301000",
  },
  {
    name: "Tomato",
    price: 5,
    category: "Food",
    _alt: "tomato",
    _url: "https://post.greatist.com/wp-content/uploads/2019/10/Tomato_1200x628-facebook.jpg",
  },
  {
    name: "Sweatshirt",
    price: 500,
    category: "Clothing",
    _alt: "sweatshirt",
    _url: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720057111232",
  },
  {
    name: "Apple",
    price: 10,
    category: "Food",
    _alt: "apple",
    _url: "https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg",
  },
  {
    name: "Milk",
    price: 25,
    category: "food",
    _alt: "milk",
    _url: "https://5.imimg.com/data5/PF/FT/XN/SELLER-6800096/amul-gold-milk-500ml-250x250.jpg",
  },
  {
    name: "TV",
    price: 15000,
    category: "Electronics",
    _alt: "television",
    _url: "https://sourceofproduct.com/wp-content/uploads/2019/11/Mi-LED-Smart-TV-4S-42″-4K-HDR-Global-Version-SOP-4.jpg",
  },
];

function App() {
  const [items] = useState(ITEMS);
  const [fetchedItems, setFetchItems] = useState([]);
  const [fetchedDevices, setFetchedDevices] = useState([]);
  const fetchItems = async () => {
    let response = await fetch(" https://api.testvalley.kr/main-banner/all");
    let data = await response.json();
    // extract pcImageUrl to _url,title to name,title to alt
    let items = data.map((item) => {
      return {
        _url: item.pcImageUrl,
        name: item.title,
        _alt: item.title,
      };
    });
    setFetchItems(items);
  };

  const fetchDevices = async () => {
    let response = await fetch(
      "https://api.testvalley.kr/collections?prearrangedDiscount"
    );
    let data = await response.json();
    let items = data.items.filter((item) => {
      return item.type === "SINGLE" && item.viewType === "TILE";
    });

    console.log(items);

    // now for each item, extract the items to items which is array, title to title,
    // and for each items inside each above items, extract the publication.media[0].uri to _url
    items = items.map((item) => {
      return {
        name: item.title,
        items: item.items.map((item) => {
          return {
            _url: item.publication.media[0].uri,
            name: item.publication.productName,
            rating: item.publication.rating,
            couponDiscountPrice: item.publication.priceInfo.couponDiscountPrice,
            couponDiscountRate: item.publication.priceInfo.couponDiscountRate,
          };
        }),
      };
    });

    setFetchedDevices(items);
  };

  useEffect(() => {
    fetchItems();
    fetchDevices();
  }, []);

  return (
    <div>
      <div className="App">
        <Header></Header>

        {items && <Carousel items={fetchedItems} />}
      </div>
      <main>
        <Sponsors />

        {fetchedDevices &&
          fetchedDevices.map((device) => {
            return (
              <CarouselSimple
                items={device.items}
                title={device.name}
                key={device.name}
              />
            );
          })}
      </main>
    </div>
  );
}

export default App;
