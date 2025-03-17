import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/v1/product/${params.id}`,
          { withCredentials: true }
        );
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setProduct(data.product);
        setMainImage(data.product.images[0]); // Set first image as main image
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <main className="w-full mt-20 md:mt-24">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {product && !loading && !error && (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto md:p-3 md:my-7 gap-8">
          {/* Share Button */}
          {/* <div
            onClick={() => handleShare()}
            className="fixed top-28 right-10 md:top-24 md:right-20 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer"
          >
            <FaShare className="text-slate-500" />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )} */}

          {/* Image Gallery */}
          <div className="hidden md:flex md:w-1/2 w-full flex-col gap-4">
            {/* Large Image Display */}
            <div
              className="h-[400px] border rounded-md"
              style={{
                background: `url(${mainImage}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>

            {/* Thumbnails for Desktop */}
            <div className="flex gap-2">
              {product.images.map((url) => (
                <div
                  key={url}
                  className={`h-[100px] w-[100px] cursor-pointer border rounded-md ${
                    mainImage === url ? "border-2 border-blue-500" : ""
                  }`}
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => setMainImage(url)}
                ></div>
              ))}
            </div>
          </div>

            {/* Swiper Slider for Mobile */}
            <div className="flex md:hidden">
              <Swiper
                className="w-full"
                slidesPerView={1} 
                spaceBetween={10}
                pagination={{ clickable: true }}
              >
                {product.images.map((url) => (
                  <SwiperSlide key={url}>
                    <div
                      className={`h-[380px] w-full border rounded-md`}
                      style={{
                        background: `url(${url}) center no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          {/* Product Details */}
          <div className="md:w-1/2 w-full flex flex-col gap-6 md:gap-12 px-5 md:px-0">
            <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">{product?.name}</p>
            <p className="text-gray-700">
              <span className="font-semibold text-black">Description - </span>
              {product?.description}
            </p>
            </div>
            
            <a href="/enquiry" className="w-44">
              <Button/>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductDetails;
