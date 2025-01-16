import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import visaLogo from "../assets/visaLogo.png";

const BASE_URI = "https://www.bakarcompany.somee.com";

type ApiResponse = {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
};

function addSpaceBeforeSecondCapital(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

const BankCard = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const fetchData = async () => {
    try {
      setIsFetching(true);
      fetch(`${BASE_URI}/api/IssueCard/get-card-data`)
        .then((res) => res.json())
        .then((data) =>
          setApiData({
            ...data,
            cardholderName: addSpaceBeforeSecondCapital(data.cardholderName),
          })
        );
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetching(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          {isFetching ? (
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          ) : (
            <img
              className="ml-auto"
              src={visaLogo}
              width={40}
              height={40}
              alt="visa logo"
            />
          )}
        </CardHeader>
        <CardContent>
          {isFetching ? (
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          ) : (
            <p className="flex align-center w-full mr-auto">
              **** **** **** {apiData?.last4}
            </p>
          )}
        </CardContent>
        <CardFooter className="grid grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <p className="text-xs">Cardholder</p>
            {isFetching ? (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            ) : (
              <p className="text-xs">{apiData?.cardholderName}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-xs">Expiry Date</p>
            {isFetching ? (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            ) : (
              <p className="text-xs">
                {apiData?.expiryMonth}/{apiData?.expiryYear}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-xs">CVV</p>
            {isFetching ? (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            ) : (
              <p className="text-xs">
                {[...Array(apiData?.cvc.length).fill("*")]}
              </p>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BankCard;
