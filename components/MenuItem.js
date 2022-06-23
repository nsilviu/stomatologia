import Link from "next/link";

const MenuItem = (props) => {
  const { label, to, onClick } = props;

  return (
    <li
      className="rounded-lg py-3 px-2 hover:cursor-pointer hover:bg-white"
      onClick={onClick}
    >
      <Link href={to} className="">
        <span className="inline-block h-full w-full">{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
