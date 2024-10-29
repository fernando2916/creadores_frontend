const Section = ({ title, description, content, className }) => {
    return (
      <section className={`px-5 mx-auto ${className}`}>
        {/* Cabezote */}
        <div className="">
          <h2 className="grid place-content-center text-3xl font-bold mx-auto overflow-hidden max-w-7xl">
            {title}
          </h2>
          <p className="grid place-content-center text-lg text-center pb-5">
            {description}
          </p>
        </div>
        {content}
      </section>
    );
  };
  
  export default Section;
  