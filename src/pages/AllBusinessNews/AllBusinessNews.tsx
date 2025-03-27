import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { businessNewsRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
import { useNotification } from "../../hooks/useNotification";

const AllBusinessNews = () => {
  const dispatch = useDispatch();
  const { allBusinessNewsLoading, allBusinessNewsData, allBusinessNewsError } =
    useSelector((store: RootState) => store?.businessNews);

  useEffect(() => {
    dispatch(businessNewsRequest());
  }, []);

  if (allBusinessNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  if (allBusinessNewsError) {
    useNotification({ description: allBusinessNewsError.error });
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {allBusinessNewsData?.map((news, index) => (
        <NewsCard
          key={index}
          loading={allBusinessNewsLoading}
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
export default AllBusinessNews;
