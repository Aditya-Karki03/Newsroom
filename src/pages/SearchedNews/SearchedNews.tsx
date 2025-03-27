import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
import { useNotification } from "../../hooks/useNotification";
import { useSearchParams } from "react-router";

const SearchedNews = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { searchNewsLoading, searchNewsData, searchNewsError } = useSelector(
    (store: RootState) => store?.searchedNews
  );

  useEffect(() => {
    dispatch(
      searchRequest({
        query: query ?? "",
      })
    );
  }, [query]);

  if (searchNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  if (searchNewsError) {
    useNotification({ description: searchNewsError.error });
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      {searchNewsData?.map((news, index) => (
        <NewsCard
          key={index}
          loading={searchNewsLoading}
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
export default SearchedNews;
