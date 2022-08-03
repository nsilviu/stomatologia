import Button from "./Button";
import { Info } from "./svgs";

export const ServiceCard = (props) => {
  const { title, description, to, icon, descriptionLength } = props;

  const trimmedLength = description.substring(0, descriptionLength);

  return (
    <div className="mr-4 min-w-[48%] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white shadow-md">
      <div>{icon}</div>
      <h1 className="mb-4 flex w-full justify-center rounded-md text-xl font-bold">
        {title}
      </h1>
      <p className="text-xs font-light">{trimmedLength}...</p>
      <div className="relative mt-5 flex justify-center">
        <Button
          textStyle="text-xs"
          link={to}
          text="Descopera"
          icon={<Info />}
        />
      </div>
    </div>
  );
};
