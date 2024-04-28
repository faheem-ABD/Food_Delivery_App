const HomePage = () => {
  return(
    <div className = "flex flex-col gap-12">
        <div className="bg-white rounded -lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16"></div>
        <h1 className="text-5xl font-bold tracking-tight text-yellow-500">
            Tuck into takeaway today from Stockholm
        </h1>
        <span className="text-xl text-blue-500">Food is just a click away!</span>
    </div>
  );
};

export default HomePage;