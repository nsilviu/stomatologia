import Image from "next/image";

const TeamMember = (props) => {
  const { src, id, title, description, subtitle } = props;
  return (
    <div className="p-4">
      <div className="flex w-full flex-col flex-wrap justify-center rounded-lg p-2 shadow-2xl shadow-gray-500 ">
        <div>
          <img
            className="inline-block w-[40vw] rounded-md object-cover"
            src="/doctor1.jpg"
          />
          <h1 className="mb-5 inline-block text-2xl font-bold">
            <span>Dr. Lavinia Irina Ardalau</span>
          </h1>

          <h2 className="text mx-5 text-center">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus sit amet dolor at magna varius feugiat in
              vitae lacus. Nam blandit lobortis vestibulum.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
