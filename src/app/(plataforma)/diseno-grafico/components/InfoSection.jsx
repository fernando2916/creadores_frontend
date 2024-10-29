export const InfoSection = ({ title, img, children, className, style }) => {
    return (
      <section className={`${className}`}>
        <div className="grid grid-cols-12 p-6 md:mt-10 items-center max-w-7xl mx-auto ">
          <div className={` col-span-full lg:col-span-6 ${style}`} >{img}</div>
          <div className="  col-span-full lg:col-span-6">
            <h2 className="font-semibold text-3xl md:text-5xl">{title}</h2>
            {children}
          </div>
        </div>
      </section>
    );
  };
  