import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 lg:flex lg:justify-between lg:items-center">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="lg:w-2/3 lg:text-start">
            <h2 className="font-serif text-2xl md:text-3xl">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-sm mt-2 md:text-base">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achive your goals.
            </p>
          </div>
          <div>
            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 lg:mt-0 border border-gray-950 ">
              <span className="font-semibold ">Get in touch</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
