import { Input, Flex, Segmented } from "antd";
import { useLocation, useNavigate } from "react-router";

const { Search } = Input;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newsOptions = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "Technology",
      value: "/technology",
    },
    {
      label: "Sports",
      value: "/sports",
    },
    {
      label: "Business",
      value: "/business",
    },
  ];
  const handleSearch = (value: string) => {
    if (value) {
      navigate(`/results?query=${value.trim()}`);
    }
  };

  return (
    <div className="fixed top-0 z-10 border bg-white border-black/10 w-screen  py-2 shadow-md flex justify-center  items-center gap-6">
      <Flex gap="middle" align="center">
        <Segmented
          options={newsOptions}
          size="large"
          shape="round"
          value={location.pathname}
          onChange={(value) => navigate(value)}
        />
      </Flex>
      <Search
        placeholder="input search text"
        onSearch={handleSearch}
        style={{ width: 400 }}
      />
    </div>
  );
};
export default Navbar;
