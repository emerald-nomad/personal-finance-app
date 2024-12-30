import clsx from "clsx";
import styles from "./transactions.module.scss";
import { Button } from "@/app/_components/Button";
import Image from "next/image";

export function Transactions() {
  return (
    <div className={clsx([styles["transactions"]])}>
      <div className={clsx([styles["heading"]])}>
        <span className={clsx(["text-preset-2"])}>Transactions</span>
        <Button as="link" href="/dashboard/transactions" color="tertiary">
          View All
        </Button>
      </div>
      <ul className={clsx([styles["list"]])}>
        <ListItem
          imageUrl="/images/avatars/emma-richardson.jpg"
          name="Emma Richardson"
          amount={75.5}
          date="19 Aug 2024"
        />
        <Divider />
        <ListItem
          imageUrl="/images/avatars/savory-bites-bistro.jpg"
          name="Savory Bites Bistro"
          amount={-55.5}
          date="19 Aug 2024"
        />
        <Divider />
        <ListItem
          imageUrl="/images/avatars/daniel-carter.jpg"
          name="Daniel Carter"
          amount={-42.3}
          date="18 Aug 2024"
        />
        <Divider />
        <ListItem
          imageUrl="/images/avatars/sun-park.jpg"
          name="Sun Park"
          amount={120}
          date="17 Aug 2024"
        />
        <Divider />
        <ListItem
          imageUrl="/images/avatars/urban-services-hub.jpg"
          name="Urban Sercvices Hub"
          amount={-65}
          date="17 Aug 2024"
        />
      </ul>
    </div>
  );
}

interface ListItemProps {
  imageUrl: string;
  name: string;
  amount: number;
  date: string;
}

function ListItem({ imageUrl, name, amount, date }: ListItemProps) {
  return (
    <div className={clsx([styles["list-item"]])}>
      <div className={clsx([styles["title"]])}>
        <div className={clsx([styles["image-container"]])}>
          <Image src={imageUrl} alt={name} width={40} height={40} />
        </div>

        <span className={clsx(["text-preset-4-bold"])}>{name}</span>
      </div>

      <div className={clsx([styles["data"]])}>
        <span
          className={clsx([
            "text-preset-4-bold",
            amount > 0 && styles["increase"],
          ])}
        >
          {amount > 0 ? "+" : "-"}${Math.abs(amount).toFixed(2)}
        </span>
        <span className={clsx(["text-preset-5"])}>{date}</span>
      </div>
    </div>
  );
}

function Divider() {
  return <hr className={clsx([styles["divider"]])} />;
}
