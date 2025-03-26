import NewsCard from "../components/NewsWriter";

const AllTechNews = () => {
  return (
    <NewsCard
      author="Hayley Cuccinello"
      description="Private credit is a hot asset class but comes with hefty income taxes. Top earners can save on tax with specific insurance policies known as PPVA and PPLI."
      publishedAt="2025-03-25T12:00:01Z"
      title="How the rich use insurance to invest in private credit without steep tax bills - CNBC"
      url="sd"
      urlToImage="https://image.cnbcfm.com/api/v1/image/108118621-1742415514599-gettyimages-2116635858-img_5521-edit.jpeg?v=1742825641&w=1920&h=1080"
      source={{ id: "12", name: "CNBC" }}
    />
  );
};
export default AllTechNews;
