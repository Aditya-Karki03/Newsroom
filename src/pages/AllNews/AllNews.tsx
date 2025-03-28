import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsRequest } from "./slice";
import { RootState } from "../../redux/store";
import NewsCard from "../../components/NewsWriter";
import { Spin } from "antd";
// import { useNotification } from "../../hooks/useNotification";

const AllNews = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { allNewsLoading, allNewsData, allNewsError, infiniteScrollLoading } =
    useSelector((store: RootState) => store?.allNews);

  useEffect(() => {
    dispatch(newsRequest(page));
  }, [page]);

  //implemented infinite scrolling
  //I need only 4 cards at each api call
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    //cleanup function
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  //get the total height of the webpage beyond the viewport height
  const handleInfiniteScroll = () => {
    //window.innerHeight gives me the viewport height
    //document.documentElement.scrollTop gives me the scrollable height if any
    //document.documentElement.scrollHeight gives me the total height of the webpage which is beyond the viewport height
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (allNewsLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin size="large" />;
      </div>
    );
  }

  // if (allNewsError) {
  //   useNotification({ description: allNewsError.error });
  //   return null;
  // }

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
      {infiniteScrollLoading && (
        <div className="min-w-fit min-h-fit flex justify-center items-center py-3">
          <Spin size="default" />
        </div>
      )}
    </div>
  );
};
export default AllNews;

//https://newsapi.org/v2/top-headlines?country=us&apiKey=2edf4362f8364a4cb7bde09cf00dc323
