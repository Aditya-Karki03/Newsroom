import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
import { useNotification } from "../../hooks/useNotification";

const AllNews = () => {
  const dispatch = useDispatch();
  const { allNewsLoading, allNewsData, allNewsError } = useSelector(
    (store: RootState) => store?.allNews
  );

  useEffect(() => {
    dispatch(newsRequest());
  }, []);

  if (allNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  if (allNewsError) {
    useNotification({ description: allNewsError.error });
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {allNewsData?.map((news, index) => (
        <NewsCard
          key={index}
          loading={allNewsLoading}
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
export default AllNews;

//https://newsapi.org/v2/top-headlines?country=us&apiKey=2edf4362f8364a4cb7bde09cf00dc323
