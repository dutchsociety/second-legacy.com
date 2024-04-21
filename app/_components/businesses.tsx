import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Businesses() {
  return (
    <>
      <h4 className="text-4xl uppercase text-white font-bold text-center">
        Second Legacy References
      </h4>
      <BentoGrid className="max-w-4xl mx-auto mt-12">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            url={item.url}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 1 || i === 1
                ? "md:col-span-2"
                : "" || i === 2
                ? "md:col-span-3"
                : "" || i === 3
                ? "md:col-span-2"
                : ""
            }
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);
const items = [
  {
    title: "HELLO Labs",
    url: "https://hello.one/",
    description:
      "#1 Entertainment brand in crypto, managing DogeDash, Dash of the Dead and Killer Whales",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gamesfy.com",
    url: "https://gamesfy.com",
    description:
      "Gamefi your token sale with community activation and social engagement. Give your investors a set of tasks to earn points for a airdrop.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PikaPixel.net",
    url: "https://pikapixel.net",
    description: "PikaPixel enables filmmakers to raise production funds that are unbound by the constraints of traditional funding models.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FishyMails.com",
    url: "https://fishymails.com/",
    description: "FishyMails allows you access to a real-time updated database with mailaddresses that are often used by scammers / phising / fake registrations that cause low retention and high amount of disputes.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "InsanityBot.com",
    url: "https://insanitybot.com/",
    description: "The All In One Token & NFT Listing, Buy and Sell notification bot for Telegram & Discord that you need",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
