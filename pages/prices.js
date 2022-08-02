import PriceTable from "../components/PriceTable";
import { EstFac } from "../components/PricesList";

export default function Prices() {
  return (
    <div>
      <PriceTable serviceName={EstFac.serviceName} />
    </div>
  );
}
