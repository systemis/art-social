import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Text,
  useToast,
  Highlight,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/root-store";
import type { UploadResponse } from "redux/apps/thunk";
import { uploadFile } from "redux/apps/thunk";
import { updateProfile } from "redux/apps/user";
import { UpdateUserDto } from "dto";
import { useMain } from "hooks/useMain";
import { MAX_SIZE } from "utils";

export const UserHeader: React.FC = () => {
  const [isLoading, setLoading] = React.useState(false);
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const toast = useToast();

  const { getProfile } = useMain();
  const dispatch: AppDispatch = useDispatch();

  /**
   * @dev The funtion to update user info.
   * @param {UpdateUserDto} dto
   */
  const handleUpdateProfile = async (updateUserDto: UpdateUserDto) => {
    await updateProfile(updateUserDto)
    await getProfile();
    toast({
      title: "Success",
      description: "Update avatar successfully!",
    })
    setLoading(false);
  }

  /**
   * @dev Update picture.
   * @param {File}
   */
  const handleUpdatePicture = async (e: any) => {
    const res: UploadResponse[] = [];
    const file = e?.target?.files[0];
    if (file?.size > MAX_SIZE) {
      console.log("File is too large. Please upload file under 10MB");
      return;
    }

    const resAction = await dispatch(
      uploadFile({
        file,
        fileName: file.name,
        type: file?.type,
        endpoint: "",
      })
    );

    if (resAction) {
      res.push({
        fileName: file.name,
        fileType: file.type,
        accessUrl: resAction.payload ? resAction.payload.toString() : "",
      });
    }

    setLoading(true);
    return handleUpdateProfile({ picture: res[0].accessUrl });
  }


  return (
    <Box
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      pt={{ base: "30px" }}
    >
      <Flex mt={"25px"} justify={"center"}>
        <Box
          display={"flex"}
          w={{
            base: "100%",
            sm: "60%",
            md: "50%",
            lg: "35%",
          }}
          ml={{
            base: "10px",
            sm: "45px",
            md: "0",
            lg: "0",
          }}
        >
          <Avatar
            cursor={"pointer"}
            float={"left"}
            src={currentUser?.picture}
            size={"lg"}
          />
          <Box float={"left"} ml="3" lineHeight={"8"} display="grid">
            <Box>
              <Text cursor={"pointer"} fontSize="18px" fontWeight="bold">
                {currentUser?.name}
              </Text>
            </Box>
            <Box>
              <input
                id="profile-file"
                type="file"
                onChange={handleUpdatePicture}
                style={{ display: "none" }}
                accept="image/png, image/jpeg"
              />
              <Button
                w={{ md: "170px" }}
                h={{ md: "30px" }}
                float={"left"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                alignItems={"center"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("profile-file")?.click()
                }}
                _hover={{
                  bg: "white",
                  color: "pink.400",
                  borderColor: "#dcdcdc",
                  border: "1px",
                }}
                isLoading={isLoading}
              >
                <Center>Upload new picture</Center>
              </Button>
            </Box>
            <Box>
              <Text cursor={"pointer"} fontSize="sm" w={""}>
                <Text>Update your username and manage your account</Text>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box flex={{ base: "none", md: 0 }} display={"flex"} letterSpacing={1}>
          <Button
            float={"left"}
            mx={{ md: "10px" }}
            w={"300px"}
            height={"65px"}
            display={{ base: "none", md: "inline-flex" }}
            letterSpacing={"1px"}
            color={"black"}
            border={"1px solid #dcdcdc"}
            _hover={{
              bgGradient: "linear(to-r,red.500, yellow.500)",
              borderColor: "#d3d3d3",
              color: "white",
            }}
          >
            <Center>
              <Box
                justifyContent={"center"}
                float={"left"}
                fontSize={"16px"}
                lineHeight={"7"}
                _hover={{ color: "white" }}
              >
                <Text fontWeight="600" _hover={{ color: "White" }}>
                  Go
                  <Highlight
                    query="Pro"
                    styles={{
                      px: "1",
                      color: "pink.500",
                    }}
                  >
                    Pro
                  </Highlight>
                </Text>
                <Text fontSize={"12px"} fontWeight={"400"}>
                  Add power features for just $5/month
                </Text>
              </Box>
            </Center>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
