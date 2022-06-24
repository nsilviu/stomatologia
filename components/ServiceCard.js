export const ServiceCard = (props) => {
  const { title, description, to } = props;

  return (
    <div className="m-2 rounded-lg bg-slate-100 p-2 shadow-md">
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm">{description}</p>
      <a href={to}>Mai mult...</a>
    </div>
  );
};
