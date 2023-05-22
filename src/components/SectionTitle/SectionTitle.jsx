
const SectionTitle = ({subHeading,heading}) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h1 className="uppercase text-4xl border-y-4 py-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;