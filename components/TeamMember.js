import Image from "next/image";

const TeamMember = (props) => {
  const { photo, id, title, description, subtitle } = props;
  return (
    <div>
      <div className="mx-4 mb-6 mt-20 flex w-[calc(100vw-2rem)] flex-row flex-wrap items-center lg:my-0 lg:h-screen">
        {/* <!--Main Col--> */}
        <div
          id="profile"
          className="w-full rounded-xl bg-white shadow-md lg:mx-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none"
        >
          <div className="p-4 text-center md:p-12 lg:text-left">
            {/* <!-- Image for mobile view--> */}
            <div className="relative mx-auto -mt-16 flex h-48 w-48 justify-center overflow-hidden rounded-full bg-center object-cover align-middle shadow-xl">
              <Image
                alt={title}
                src={photo}
                width="200px"
                height="200px"
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="pt-8 text-3xl font-bold lg:pt-0">{title}</h1>
            <div className="mx-auto w-4/5 border-b-2 border-blue-500 pt-3 lg:mx-0"></div>
            <p className="flex items-center justify-center pt-4 text-base font-bold  lg:justify-start">
              <svg
                className="h-4 fill-current pr-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {description}
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:justify-start lg:text-sm">
              <svg
                className="h-4 fill-current pr-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {subtitle}
            </p>

            <div className="pt-12 pb-8">
              <button className="rounded-full bg-green-700 py-2 px-4 font-bold text-white hover:bg-green-900">
                Programeza-te
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
