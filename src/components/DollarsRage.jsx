import { useEffect, useState } from "react";

function DollarsRage({ price_rage_end }) {
  const [dollar, setDollar] = useState("");

  useEffect(() => {
    const numberMode = Number(price_rage_end);
    if (numberMode <= 50000) setDollar("$");
    else if (numberMode > 50001 && numberMode <= 150000) setDollar("$$");
    else if (numberMode > 150001 && numberMode <= 300000) setDollar("$$$");
    else if (numberMode > 300001 && numberMode <= 1000000) setDollar("$$$$");
    else setDollar("$$$$$");
  }, [price_rage_end]);

  return dollar;
}

export default DollarsRage;
