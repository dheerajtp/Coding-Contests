import loading from "../assets/loading.gif";

const Searching = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={loading} alt="loading" className="md:w-1/4" />
    </div>
  );
};

export default Searching;
