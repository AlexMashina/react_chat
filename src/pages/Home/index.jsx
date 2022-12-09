import React from "react";

import "./Home.scss";
import { Message } from "../../components";

const Home = () => {
  const time = new Date();
  return (
    <section className="home">
      <Message
        avatar="https://assets.faceit-cdn.net/avatars/157297d4-c9fa-4e4c-9ac8-775184f44482_1568452791487.jpg"
        text="Салам, Барут! Я тот кто тебе нужен✌"
        date={time}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://avatars.mds.yandex.net/i?id=d9dc94ca316c9e8696d735500fbaab1d29610aac-7086141-images-thumbs&n=13"
        text="Привет, брат!"
        date={time}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
          },
        ]}
      />
    </section>
  );
};

export default Home;
