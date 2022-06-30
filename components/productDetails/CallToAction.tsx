import React, { useState } from "react";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { useLanguage } from "../../hooks/useLanguage";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { IProduct } from "../../lib/types/products";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToIRR";
import { calculateDiscountPercentage } from "../../utilities/calculateDiscountPercentage";
import ProductPrice from "../UI/ProductPrice";

interface Props {
  product: IProduct;
}
const CallToAction: React.FC<Props> = ({ product }) => {
  const { price, discount, irrprice, irrdiscount } = product;
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const productInfoAddToCart = {
    image: product.image,
    name: product.name,
    slug: product.slug,
    price: product.price,
    discount: product.discount ? product.discount : undefined,
    brand: product.brand,
    category: product.category,
    starRating: product.starRating,
    quantity: 1,
    totalPrice: product.price,
  };

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        product: productInfoAddToCart,
        quantity: counter,
      })
    );
  }

  function increment() {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }

  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center flex-grow max-w-[350px] mt-4 lg:mt-0 rtl:mr-auto ltr:ml-auto xl:rtl:ml-2 px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
      <div className="flex flex-col w-full ">
        <p className="text-lg">{t.price}</p>
        <ProductPrice price={price} discount={discount} isLargeSize={true} />
      </div>
      <div className="flex items-center justify-between mt-6 cursor-pointer">
        <div className="p-2" onClick={increment}>
          <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
        </div>
        <input
          className="inline-block w-[70px] rtl:pr-8 ltr:pl-7 py-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
          type="number"
          min={1}
          max={10}
          value={counter}
          onChange={onInputNumberChangeHandler}
        />
        <div onClick={decrement} className="p-2">
          <HiMinusSm style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <br />
      <button
        className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
        onClick={addToCartHandler}
      >
        <BsCartPlus style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
        {t.addToCart}
      </button>
    </div>
  );
};

export default CallToAction;
