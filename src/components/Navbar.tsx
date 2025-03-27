import { Flex, Segmented } from "antd";
import { useNavigate } from "react-router";

const Navbar = () => {
  //   const newsOptions = ["Technology", "Sports", "Business"];
  const navigate = useNavigate();
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

  return (
    <div className="fixed top-0 z-10 border bg-white border-black/10 w-screen  py-2 shadow-md flex justify-center ">
      <Flex gap="middle" align="center">
        <Segmented
          options={newsOptions}
          size="large"
          shape="round"
          onChange={(value) => navigate(value)}
        />
      </Flex>
    </div>
  );
};
export default Navbar;
