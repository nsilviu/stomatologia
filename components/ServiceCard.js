import Button from "./Button";
import { Info } from "./svgs";

export const ServiceCard = (props) => {
  const { title, description, to, icon, descriptionLength, style } = props;

  const trimmedLength = description.substring(0, descriptionLength);

  return (
    <div
      className={`${style} flex flex-col justify-around rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white shadow-md`}
    >
      <div>{icon}</div>
      <h1 className="mb-4 flex w-full justify-center rounded-md text-xl font-bold">
        {title}
      </h1>
      <p className="text-xs font-light">{trimmedLength}...</p>
      <div className="relative mt-5 flex justify-center">
        <Button
          textStyle="text-xs"
          buttonStyle="p-1"
          link={to}
          text="Descopera"
          icon={<Info />}
        />
      </div>
    </div>
  );
};
