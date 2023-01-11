import { Box, Center, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { Logo } from "assets/images";
import { AppCol } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ project, loading }: any) => {
  return (
    <Box
      width={{
        base: "100%",
        sm: "250px",
        md: "250px",
        lg: "300px",
      }}
      m={{
        base: "0 10px 55px",
        md: "0 20px 70px",
      }}
      cursor="pointer"
    >
      <Center flexDirection="column">
        <Box position="relative" data-group>
          <Image
            src={project?.image}
            alt=""
            height="220px"
            objectFit="cover"
            borderRadius="0.5em"
            transition="all 0.3s ease"
          />
        </Box>
      </Center>

      <Box>
        <Flex
          alignItems="center"
          w={{
            base: "100%",
            sm: "60%",
            md: "50%",
            lg: "100%",
          }}
          pl={{
            base: "10px",
            sm: "15px",
            md: "5px",
            lg: "5px",
          }}
          pt={{ base: "10px" }}
        >
          <Box pt={"3px"} float={"left"} ml="3">
            <Link
              _hover={{ textDecoration: "none" }}
              fontSize="sm"
              fontWeight="bold"
            >
              {project?.name}
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const CollectionTab = ({ projects, loading }: any) => {
  const history = useHistory();
  if (loading) {
    return (
      <Center>
        <AppCol justifyContent="center" alignItems="center" height="400px">
          <Image src={Logo} w="20vw" mb="1.5em" />
          <AppTitle fontSize="30px" my="0.5em">
            Explore your projects here ❤
          </AppTitle>
          <Text fontSize="15px" color="#6e6d7a" w="30vw" textAlign="center">
            Click the &quot;box&quot; whenever you want to create new project
          </Text>
        </AppCol>
      </Center>
    );
  } else {
    return (
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} my={7}>
        {projects?.map((project: any) => {
          return <ProjectCard key={project.id} project={project} />;
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
          onClick={() => history.push("/create/new-project")}
        >
          <Icon as={BsPlusLg} boxSize={16} color="#e7e7e9" />
        </Box>
      </Box>
    );
  }
};

export default CollectionTab;
