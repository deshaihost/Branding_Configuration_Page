import { imgImage1, imgImage2, imgImage3 } from "../assets/placeholder";

export default function Group1() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[867px] left-[13px] top-0 w-[1686px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[999px] left-[13px] top-[867px] w-[1683px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[1031px] left-0 top-[1842px] w-[1722px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}