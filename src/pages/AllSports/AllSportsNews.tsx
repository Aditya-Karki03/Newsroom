import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSportsRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
import { useNotification } from "../../hooks/useNotification";

const AllSportsNews = () => {
  const dispatch = useDispatch();
  const { allSportsNewsLoading, allSportsNewsData, allSportsNewsError } =
    useSelector((store: RootState) => store?.sportsNews);

  useEffect(() => {
    dispatch(allSportsRequest());
  }, []);

  if (allSportsNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  if (allSportsNewsError) {
    useNotification({ description: allSportsNewsError.error });
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {allSportsNewsData?.map((news, index) => (
        <NewsCard
          key={index}
          loading={allSportsNewsLoading}
          author={news?.author}
          description={news?.description}
          publishedAt={news?.publishedAt}
          source={news.source}
          title={news.title}
          url={news.url}
          urlToImage={news?.urlToImage}
        />
      ))}
    </div>
  );
};
export default AllSportsNews;
