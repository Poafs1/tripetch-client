import Image from "next/image";
import { ReactElement } from "react";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: ReactElement[]) => (
      <div
        style={{
          left: "0",
          bottom: "30px",
        }}
        className="absolute"
      >
        <ul className="space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (_i: number) => (
      <div className="w-2.5 h-2.5 rounded-full bg-[#D8D8D8]"></div>
    ),
  };

  const renderMobileSliderItem = (
    listItemNumber: string,
    title: string,
    description: string
  ) => {
    return (
      <div className="pt-[72px] pb-[69px] px-[18px] space-y-5 bg-[#F5F4F9] h-[284px]">
        <div className="flex items-center space-x-2.5">
          <div className="space-y-1">
            <p className="text-sm md:text-lg tracking-[1.5px] leading-normal">
              {listItemNumber}
            </p>
            <div className="h-[5px] bg-[#603EBE] rounded-[2.5px]"></div>
          </div>
          <h2 className="text-[#C2C2C2] text-[28px] md:text-4xl leading-normal tracking-[1.5px]">
            {title}
          </h2>
        </div>
        <p className="text-[15px] leading-normal">{description}</p>
      </div>
    );
  };

  return (
    <main className="overflow-x-hidden min-h-screen">
      {/* Athlets section */}
      <section className="relative">
        {/* Hero Image */}
        <div className="absolute left-0 top-[35px] right-2/4 bottom-0 grid-cols-1 justify-items-center lg:grid hidden z-0">
          <Image
            src="/static/american-football-player-lg.png"
            alt="American Football Player"
            width={678}
            height={950}
            className="!w-[678px] !min-w-[678px] !h-[950px] !min-h-[950px]"
          />
        </div>
        <div className="absolute left-[-185px] top-[101px] hidden md:block lg:hidden">
          <Image
            src="/static/american-football-player-md.png"
            alt="American Football Player"
            width={518}
            height={718}
            className="!w-[518px] !h-[718px] !min-w-[518px] !min-h-[718px]"
          />
        </div>
        <div className="absolute md:hidden top-[70px] left-0 right-0 z-10 flex justify-center">
          <Image
            src="/static/american-football-player-sm.png"
            alt="American Football Player"
            width={218}
            height={281}
            className="!w-[218px] !h-[281px] !min-w-[218px] !min-h-[281px]"
          />
        </div>
        <div className="hidden md:block">
          {/* Connection */}
          <div className="grid grid-cols-3 lg:grid-cols-2 pt-[87px] pb-[30px] lg:pt-6 lg:pb-14 px-[30px] ">
            <div className="col-start-2 col-span-2 max-w-[717px]">
              <h1 className="text-[#E7E7E7] text-[90px]">ATHLETS</h1>
              <div className="mt-9 lg:mt-[59px] flex items-center space-x-2.5">
                <div className="space-y-1">
                  <p className="text-lg tracking-[1.5px] leading-normal">01</p>
                  <div className="h-[5px] bg-[#603EBE] rounded-[2.5px]"></div>
                </div>
                <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                  CONNECTION
                </h2>
              </div>
              <p className="leading-7 mt-[21px] lg:mt-[31px] text-lg lg:text-[20px]">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </p>
            </div>
          </div>
          {/* Collaboration */}
          <div className="grid grid-cols-3 lg:grid-cols-2 py-[30px] lg:pt-[53px] lg:pb-14 bg-[#F5F4F9] px-[30px] ">
            <div className="col-start-2 col-span-2 max-w-[717px]">
              <div className="flex items-center space-x-2.5">
                <div className="space-y-1">
                  <p className="text-lg tracking-[1.5px] leading-normal">02</p>
                  <div className="h-[5px] bg-[#603EBE] rounded-[2.5px]"></div>
                </div>
                <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                  COLLABORATION
                </h2>
              </div>
              <p className="leading-7 mt-[21px] text-lg lg:text-[20px]">
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </p>
            </div>
          </div>
          {/* Growth */}
          <div className="grid grid-cols-3 lg:grid-cols-2 pt-[30px] pb-[58px] lg:pt-20 lg:pb-[98px] bg-[#5E3DB3]">
            <div className="col-start-2 col-span-2 max-w-[717px]">
              <div className="flex items-center space-x-2.5">
                <div className="space-y-1">
                  <p className="text-lg tracking-[1.5px] leading-normal">03</p>
                  <div className="h-[5px] bg-white rounded-[2.5px]"></div>
                </div>
                <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                  GROWTH
                </h2>
              </div>
              <p className="leading-7 mt-[21px] text-lg lg:text-[20px] text-white">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc 
              </p>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="block md:hidden">
          <div className="px-[18px]">
            <h1 className="text-[#E7E7E7] text-[50px]">ATHLETS</h1>
          </div>
          <div className="mt-[237px]">
            <Slider {...settings} className="relative">
              {renderMobileSliderItem(
                "01",
                "CONNECTION",
                "Connect with coaches directly, you can ping coaches to view profile."
              )}
              {renderMobileSliderItem(
                "02",
                "COLLABORATION",
                "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
              )}
              {renderMobileSliderItem(
                "03",
                "GROWTH",
                "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
              )}
            </Slider>
          </div>
        </div>
      </section>
      {/* Players section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute right-[-300px] 2xl:right-[125px] top-0 hidden lg:block">
          <Image
            src="/static/basket-ball-player-lg.png"
            alt="Basket Ball Player"
            width={991}
            height={815}
            className="!w-[991px] !h-[815px] !min-w-[991px] !min-h-[815px] col-start-2"
          />
        </div>
        <div className="absolute right-[-250px] top-[33px] hidden md:block lg:hidden">
          <Image
            src="/static/basket-ball-player-md.png"
            alt="Basket Ball Player"
            width={691}
            height={568}
            className="!w-[691px] !h-[568px]"
          />
        </div>
        <div className="absolute md:hidden top-[100px] left-0 right-0 z-10 flex justify-center">
          <Image
            src="/static/basket-ball-player-sm.png"
            alt="Basket Ball Player"
            width={302}
            height={250}
            className="!w-[302px] !h-[250px] !min-w-[302px] !min-h-[250px]"
          />
        </div>
        <div className="hidden md:block">
          {/* Connection */}
          <div className="lg:grid grid-cols-2 pt-[52px] lg:pt-[124px] pb-2.5 lg:pb-[69px] lg:max-w-7xl lg:m-auto px-[30px] 2xl:px-0">
            <div className="max-w-[432px] lg:max-w-none">
              <h1 className="text-[#E7E7E7] text-[90px]">PLAYERS</h1>
              <div className="mt-[34px] lg:mt-[68px] flex items-center space-x-2.5">
                <div className="space-y-1">
                  <p className="text-lg tracking-[1.5px] leading-normal">01</p>
                  <div className="h-[5px] bg-[#603EBE] rounded-[2.5px]"></div>
                </div>
                <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                  CONNECTION
                </h2>
              </div>
              <p className="leading-7 mt-[21px] text-lg lg:text-[20px]">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </p>
            </div>
          </div>
          {/* Collaboration */}
          <div className="bg-[#F5F4F9]">
            <div className="lg:grid grid-cols-2 pt-[51px] lg:pt-[52px] pb-[65px] lg:pb-[102px] lg:max-w-7xl lg:m-auto px-[30px] 2xl:px-0">
              <div className="max-w-[432px] lg:max-w-none">
                <div className="flex items-center space-x-2.5">
                  <div className="space-y-1">
                    <p className="text-lg tracking-[1.5px] leading-normal">
                      02
                    </p>
                    <div className="h-[5px] bg-[#603EBE] rounded-[2.5px]"></div>
                  </div>
                  <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                    COLLABORATION
                  </h2>
                </div>
                <p className="leading-7 mt-[21px] text-lg lg:text-[20px]">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </p>
              </div>
            </div>
          </div>
          {/* Growth */}
          <div className="bg-[#090C35]">
            <div className="lg:grid grid-cols-2 lg:pt-[87px] pb-[72px] pt-11 lg:pb-[62px] lg:max-w-7xl lg:m-auto px-[30px] 2xl:px-0">
              <div className="max-w-[432px] lg:max-w-none">
                <div className="flex items-center space-x-2.5">
                  <div className="space-y-1">
                    <p className="text-lg tracking-[1.5px] leading-normal text-[#8F6BE8]">
                      03
                    </p>
                    <div className="h-[5px] bg-white rounded-[2.5px]"></div>
                  </div>
                  <h2 className="text-[#C2C2C2] text-4xl leading-normal tracking-[1.5px]">
                    GROWTH
                  </h2>
                </div>
                <p className="leading-7 mt-[21px] text-lg lg:text-[20px] text-white">
                  Save your time, recruit proper athlets for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="block md:hidden pt-[19px]">
          <div className="px-[18px]">
            <h1 className="text-[#E7E7E7] text-[50px]">PLAYERS</h1>
          </div>
          <div className="mt-[237px]">
            <Slider {...settings} className="relative">
              {renderMobileSliderItem(
                "01",
                "CONNECTION",
                "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
              )}
              {renderMobileSliderItem(
                "02",
                "COLLABORATION",
                "Work with recruiter to increase your chances of finding talented athlete."
              )}
              {renderMobileSliderItem(
                "03",
                "GROWTH",
                "Save your time, recruit proper athlets for your team."
              )}
            </Slider>
          </div>
        </div>
      </div>
    </main>
  );
}
