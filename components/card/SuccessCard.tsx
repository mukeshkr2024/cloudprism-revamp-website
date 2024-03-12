interface SuccessCardProps {
  imgUrl: string;
  title: string;
}

export const SuccessCard = ({ imgUrl, title }: SuccessCardProps) => {
  return (
    <div
      className=" h-[282px] w-[175px] rounded-[15px] border bg-cover bg-no-repeat p-6 sm:h-[320px] sm:w-[200px] md:h-[420px] md:w-[260px] "
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <p className="text-xs text-[#E5E5E5] md:text-sm"> RESEARCH REPORT</p>
      <h3 className="mt-10 text-base font-medium text-[#EDEDED] md:text-xl">
        {title}
      </h3>
    </div>
  );
};
