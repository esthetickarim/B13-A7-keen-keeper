import bannerImg from "../assets/images/banner.png";

export default function Banner() {
  return (
    <div className="bg-[#f5f7fa] py-12 px-4 text-center">
      
      {/* Image */}
      <img
        src={bannerImg}
        alt="Banner"
        className="mx-auto w-full max-w-md mb-6"
      />

      {/*  Title */}
      <h1 className="text-[28px] font-semibold text-gray-800">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-[13px] text-gray-500 mt-3">
        Your personal shelf of meaningful connections.
      </p>
    </div>
  );
}