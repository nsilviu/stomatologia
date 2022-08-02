import { ServicesList } from "../../components/ServicesList";

export default function Services() {
  return (
    <>
      <div>{ServicesList[0].text}</div>
    </>
  );
}
