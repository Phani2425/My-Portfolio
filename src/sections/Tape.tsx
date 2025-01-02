import StarIcon from "@/assets/icons/star.svg";

export const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Responsive",
    "Search Optimized",
    "Usable",
    "Reliable",
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 mx-0">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]">
          <div className="flex flex-none gap-4">
            {words.map((word) => (
              <div key={word} className="inline-flex items-center gap-4 py-3">
                <span className="text-gray-900 uppercase font-extrabold text-sm ">
                  {word}
                </span>
                <StarIcon className="size-4 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
