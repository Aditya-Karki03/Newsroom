import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { techNewsRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
import { useNotification } from "../../hooks/useNotification";

const AllTechNews = () => {
  const dispatch = useDispatch();
  const { allTechNewsLoading, allTechNewsData, allTechNewsError } = useSelector(
    (store: RootState) => store?.techNews
  );

  useEffect(() => {
    dispatch(techNewsRequest());
  }, []);

  if (allTechNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  if (allTechNewsError) {
    useNotification({ description: allTechNewsError.error });
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {allTechNewsData?.map((news, index) => (
        <NewsCard
          key={index}
          loading={allTechNewsLoading}
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
export default AllTechNews;
