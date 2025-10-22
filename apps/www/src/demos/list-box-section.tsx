"use client";

import { ListBox } from "~/components/ui/list-box";

const bands = [
  {
    albums: [
      {
        id: 101,
        name: "Abbey Road",
      },
      {
        id: 102,
        name: "Sgt. Pepper's Lonely Hearts Club Band",
      },
      {
        id: 103,
        name: "Revolver",
      },
    ],
    id: 1,
    name: "The Beatles",
  },
  {
    albums: [
      {
        id: 201,
        name: "Led Zeppelin IV",
      },
      {
        id: 202,
        name: "Physical Graffiti",
      },
      {
        id: 203,
        name: "Houses of the Holy",
      },
      {
        id: 204,
        name: "Led Zeppelin II",
      },
    ],
    id: 2,
    name: "Led Zeppelin",
  },
  {
    albums: [
      {
        id: 301,
        name: "The Dark Side of the Moon",
      },
      {
        id: 302,
        name: "The Wall",
      },
      {
        id: 303,
        name: "Wish You Were Here",
      },
      {
        id: 304,
        name: "Animals",
      },
      {
        id: 305,
        name: "Meddle",
      },
    ],
    id: 3,
    name: "Pink Floyd",
  },
  {
    albums: [
      {
        id: 401,
        name: "A Night at the Opera",
      },
      {
        id: 402,
        name: "News of the World",
      },
      {
        id: 403,
        name: "Sheer Heart Attack",
      },
      {
        id: 404,
        name: "The Game",
      },
      {
        id: 405,
        name: "Jazz",
      },
      {
        id: 406,
        name: "Queen II",
      },
    ],
    id: 4,
    name: "Queen",
  },
  {
    albums: [
      {
        id: 501,
        name: "Let It Bleed",
      },
      {
        id: 502,
        name: "Sticky Fingers",
      },
      {
        id: 503,
        name: "Exile on Main St.",
      },
      {
        id: 504,
        name: "Beggars Banquet",
      },
      {
        id: 505,
        name: "Some Girls",
      },
      {
        id: 506,
        name: "Tattoo You",
      },
    ],
    id: 5,
    name: "The Rolling Stones",
  },
  {
    albums: [
      {
        id: 601,
        name: "Nevermind",
      },
      {
        id: 602,
        name: "In Utero",
      },
      {
        id: 603,
        name: "Bleach",
      },
    ],
    id: 6,
    name: "Nirvana",
  },
  {
    albums: [
      {
        id: 701,
        name: "The Doors",
      },
      {
        id: 702,
        name: "L.A. Woman",
      },
      {
        id: 703,
        name: "Strange Days",
      },
      {
        id: 704,
        name: "Morrison Hotel",
      },
    ],
    id: 7,
    name: "The Doors",
  },
  {
    albums: [
      {
        id: 801,
        name: "OK Computer",
      },
      {
        id: 802,
        name: "Kid A",
      },
      {
        id: 803,
        name: "The Bends",
      },
      {
        id: 804,
        name: "In Rainbows",
      },
    ],
    id: 8,
    name: "Radiohead",
  },
  {
    albums: [
      {
        id: 901,
        name: "Back in Black",
      },
      {
        id: 902,
        name: "Highway to Hell",
      },
      {
        id: 903,
        name: "Let There Be Rock",
      },
    ],
    id: 9,
    name: "AC/DC",
  },
  {
    albums: [
      {
        id: 1001,
        name: "Who's Next",
      },
      {
        id: 1002,
        name: "Tommy",
      },
      {
        id: 1003,
        name: "Quadrophenia",
      },
      {
        id: 1004,
        name: "My Generation",
      },
      {
        id: 1005,
        name: "The Who Sell Out",
      },
    ],
    id: 10,
    name: "The Who",
  },
];

export default function ListBoxSection() {
  return (
    <ListBox.Root aria-label="Bands" items={bands} selectionMode="multiple">
      {(item) => (
        <ListBox.Section id={item.id}>
          <ListBox.SectionHeader>{item.name}</ListBox.SectionHeader>
          {item.albums.map((album) => (
            <ListBox.Item id={album.id} key={album.id}>
              {album.name}
            </ListBox.Item>
          ))}
        </ListBox.Section>
      )}
    </ListBox.Root>
  );
}
