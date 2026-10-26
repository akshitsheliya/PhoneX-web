import PhoneFrame from "./PhoneFrame";

export function PhoneMockup({
  children,
  className = "w-[260px]",
}) {
  return (
    <PhoneFrame className={className}>
      <div className="w-full h-full pt-11 px-4 pb-4 flex flex-col">
        {children}
      </div>
    </PhoneFrame>
  );
}

export default PhoneMockup;
