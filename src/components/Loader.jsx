import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex items-center justify-center w-full pt-6">
      <Bars
        height="60"
        width="60"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
