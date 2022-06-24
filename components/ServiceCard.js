import Button from "./Button";
import { Info } from "./svgs";

export const ServiceCard = (props) => {
  const { title, description, to, icon } = props;

  const trimmedLength = description.substring(0, 30);

  return (
    <div className="mx-4 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white shadow-md">
      <div>{icon}</div>
      <h1 className="mb-4 flex w-full justify-center rounded-md text-xl font-bold">
        {title}
      </h1>
      <p className="text-xs font-light">{trimmedLength}...</p>
      <div className="relative mt-5 flex justify-center">
        <Button
          className="absolute text-xs"
          link="/services/ortodontie"
          text="Descopera"
          icon={<Info />}
        />
      </div>
    </div>
  );
};
