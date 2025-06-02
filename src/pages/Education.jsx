import timelineElements from "../assets/Timelines/timelineElements";
import schoolIcon from "../assets/Timelines/school.svg";
import workIcon from "../assets/Timelines/work.svg";

export default function EducationSection({ defaultColor }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white text-base pb-8 sm:text-lg">
      {timelineElements.map((element) => {
       

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                style={{ width: "48px", height: "28px", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.35)" }}
                className={`${color} p-1 rounded-lg z-20`}
              />
              <div
                className={`${color} h-px w-2 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
              <div className="text-xl font-medium">{element.title}</div>
              <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                style={{ width: "22px", height: "22px", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.35)" }}
                className={`${color} p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              />
              <a
                href={element.buttonLink || "#"}
                className={`
                  ${color}
                  text-white
                  font-semibold
                  px-6 py-2
                  rounded-full
                  mx-auto
                  mt-4
                  mb-2
                  shadow-lg
                  transition
                  duration-200
                  ease-in-out
                  hover:scale-105
                  hover:bg-opacity-90
                  hover:text-yellow-300
                  border-2 border-transparent
                  hover:border-yellow-400
                  tracking-wide
                  text-base
                  flex items-center justify-center
                  gap-2
                `}
                style={{
                  letterSpacing: "0.05em",
                  boxShadow: "0 4px 16px 0 rgba(127,90,240,0.15)"
                }}
              >
                <span className="inline-block">{element.buttonText}</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}