import React from "react";
import { Card, Flex } from "antd";
import { Typography } from "antd";
import { Clock, Newspaper } from "lucide-react";

interface NewsDataCard {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

const { Title } = Typography;

const NewsCard: React.FC<NewsDataCard> = (data) => {
  // function formatAMPM(date) {
  //     var hours = date.getHours();
  //     var minutes = date.getMinutes();
  //     var ampm = hours >= 12 ? 'pm' : 'am';
  //     hours = hours % 12;
  //     hours = hours ? hours : 12; // the hour '0' should be '12'
  //     minutes = minutes < 10 ? '0'+minutes : minutes;
  //     var strTime = hours + ':' + minutes + ' ' + ampm;
  //     return strTime;
  //   }

  //   console.log(formatAMPM(new Date('2025-03-25T12:00:01Z')));

  //   const getDateAndTime = (publishedDate: string) => {
  //     const date = new Date(publishedDate);
  //     date.toLocaleDateString();
  //   };

  return (
    <Card
      loading={false}
      cover
      style={{ width: 900, border: "1px solid rgba(0, 0, 0, 0.2)" }}
    >
      <Flex gap="large">
        <img
          src={data?.urlToImage}
          className="w-50 h-50 rounded-full object-fill"
        />
        <div className="flex flex-col ">
          <div className="flex flex-col ">
            <Title level={4}>{data?.title}</Title>
            <div className="flex text-gray-500 gap-2 -mt-2 ">
              <Newspaper /> <p>{data?.source?.name}</p>
            </div>
          </div>
          <p className=" text-gray-600 text-md my-3">{data?.description}</p>
          <p className="flex text-gray-400 text-sm items-center gap-2">
            <Clock /> <span>{data?.publishedAt}</span>
          </p>
          <div className=" my-2 flex justify-between items-center ">
            <p className="w-fit px-2 py-1 rounded-2xl bg-gray-200">
              By <span>{data?.author}</span>
            </p>
            <button className="text-blue-500 cursor-pointer">Read More</button>
          </div>
        </div>
      </Flex>
    </Card>
  );
};
export default NewsCard;
