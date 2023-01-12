import {Box, Center, Icon, Image, Text} from "@chakra-ui/react";
import {Logo} from "assets/images";
import {AppCol} from "components/elements";
import {AppTitle} from "components/elements/AppTitle";
import DesignCard from "components/shared/DesignCard";
import React from "react";
import {BsPlusLg} from "react-icons/bs";
import {useHistory} from "react-router-dom";

interface OwnerProps {
  name: string;
  picture: string;
  username: string;
}

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  gallery: string[];
  tags: string[];
  owner: OwnerProps;
}

interface Product {
  listProduct: ProductProps;
}

const DesignTab = ({products, loading}: any) => {
  const history = useHistory();
  if (loading) {
    return (
      <Center>
        <AppCol justifyContent="center" alignItems="center" height="400px">
          <Image src={Logo} w="20vw" mb="1.5em" />
          <AppTitle fontSize="30px" my="0.5em">
            Explore your designs here ❤
          </AppTitle>
          <Text fontSize="15px" color="#6e6d7a" w="30vw" textAlign="center">
            Click the &quot;box&quot; whenever you want to post design
          </Text>
        </AppCol>
      </Center>
    );
  } else {
    return (
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} my={7}>
        {products?.map((product: ProductProps) => {
          return <DesignCard key={product._id} listProduct={product} />;
        })}
        <Box
          w="260px"
          borderColor="#e7e7e9"
          borderWidth={3}
          height="230px"
          borderStyle="dashed"
          borderRadius=".5em"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => history.push("/create/new")}
        >
          <Icon as={BsPlusLg} boxSize={16} color="#e7e7e9" />
        </Box>
      </Box>
    );
  }
};

export default DesignTab;

// import { Center } from "@chakra-ui/react";
// import { Logo } from "assets/images";
// import { Image, Text } from "@chakra-ui/react";
// import { AppCol } from "components/elements";
// import { AppTitle } from "components/elements/AppTitle";
// import React from "react";

// const LikedTab = () => {
//   return (
//     <Center>
//       <AppCol justifyContent="center" alignItems="center" height="400px">
//         <Image src={Logo} w="20vw" mb="1.5em" />
//         <AppTitle fontSize="30px" my="0.5em">
//           Save your favourite design ❤
//         </AppTitle>
//         <Text fontSize="15px" color="#6e6d7a" w="30vw" textAlign="center">
//           Click the &quot;❤ liked&quot; button whenever you see a interesting
//           design
//         </Text>
//       </AppCol>
//     </Center>
//   );
// };

// export default LikedTab;
