function AboutPage() {
  return (
    <div
      className="bg-[#0f0f0f] pt-16 sm:pt-28 px-10 sm:px-20 pb-14"
      id="about"
    >
      <div className="flex items-center">
        <div className="h-2 w-40 bg-[#E10000] shadow-lg"></div>
        <div
          className="font-bold text-[#6b6161] text-3xl sm:text-5xl px-5"
          style={{ fontFamily: "Jura" }}
        >
          ABOUT
        </div>
        <div className="h-2 w-10 bg-[#E10000] shadow-lg"></div>
      </div>

      {[...Array(3)].map((el) => {
        return (
          <div className="mt-10 text-white">
            <div
              className="text-xl sm:text-3xl font-bold"
              style={{ fontFamily: "K2D" }}
            >
              Subtopic
            </div>
            <div className="mt-4 text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Nisl congue eget viverra a
              vestibulum ac tristique lacus diam. Tempus morbi phasellus massa
              ac potenti diam porttitor. Massa feugiat sit ultricies ac velit.
              Et mi vitae sit consectetur.
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AboutPage;
