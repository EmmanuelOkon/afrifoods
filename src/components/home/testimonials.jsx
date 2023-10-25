import Image1 from "../../assets/images/testimonial-1.png";
import Image2 from "../../assets/images/testimonial-2.png";
import Image3 from "../../assets/images/testimonial-3.png";
import Image4 from "../../assets/images/testimonial-4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const people = [
  {
    name: "John Doe",
    role: "Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image1,
  },
  {
    name: "John Doe",
    role: "React Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image2,
  },
  {
    name: "John Doe",
    role: "Illustrator",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image3,
  },
  {
    name: "John Doe",
    role: "Product Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image4,
  },
  {
    name: "John Doe",
    role: "Front-end Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image1,
  },
  {
    name: "John Doe",
    role: "Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image2,
  },
  {
    name: "John Doe",
    role: "Illustrator",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image3,
  },
  {
    name: "John Doe",
    role: "Product Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image4,
  },
  {
    name: "John Doe",
    role: "Front-end Developer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image1,
  },
  {
    name: "John Doe",
    role: "Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image2,
  },
  {
    name: "John Doe",
    role: "Illustrator",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image3,
  },
  {
    name: "John Doe",
    role: "Product Designer",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ea maiores amet facilis laboriosam repellat maxime rem fugiat natus dolore!",
    imageUrl: Image4,
  },
];

function Testimonials() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 999999,
    arrows: false,
    pauseOnHover: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    button: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="bg-offwhite mt-20">
      <div className="lg:mx-20 py-12 px4  justify-between  lg:py-16">
        <div className="lg:space-y-6">
          <h1 className="text-blue text-center pb-6 text-3xl lg:text-[48px] font-bold">Testimonials</h1>

          <Slider {...settings} className=" w-ful flex justify-between lg:w-11/12 gap-10 ">
            {people.map((person) => (
              <div
                key={person.name}
                
              >
                <div className="flex flex-col lg:flex-row items-center py-6 px-4 rounded-md mx-10 w-[85%] bg-lightGrey lg:h-[22rem ">
                  <span className="w-[180px] h-[180px] ">
                    <img
                      className="w-full h-full bg-white rounded-full"
                      src={person.imageUrl}
                      alt={person.name}
                    />
                  </span>
                  <div className="text-lg mx-auto lg:w-1/2 leading-tight font-medium ">
                    <h3 className="font-bold text-center text-3xl text-blue md:text-left">{person.name}</h3>
                    <p className="text-orange pb-2 text-center md:text-left ">{person.role}</p>
                    <p className="text-black lg:tracking-wider py-2">{person.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
