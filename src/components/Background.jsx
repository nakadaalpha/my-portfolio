const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden flex justify-center items-center z-0 pointer-events-none animate-slide-up-fade">
      {/* Background Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
      
      <img
        src="/Maiden Light.png"
        alt="Angel Silhouette"
        className="w-[45rem] md:w-[50rem] object-contain object-top opacity-10 mix-blend-plus-lighter"
      />
    </div>
  );
};

export default Background;
