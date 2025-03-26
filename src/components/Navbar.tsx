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
    <div className="sticky border border-black/10 min-w-lg w-screen  py-2 shadow-md flex justify-center ">
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
