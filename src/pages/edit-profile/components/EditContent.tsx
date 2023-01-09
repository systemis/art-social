import React from "react";
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Highlight,
  Input,
  Textarea,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { useSelector } from "react-redux";
import { RootState } from "redux/root-reducer";
import { updateProfile, updatePassword } from "redux/apps/user";
import { UpdateUserDto, ChangeUserPasswordDto } from "dto";
import { useMain } from "hooks/useMain";
import { useForm } from "hooks/useForm";
import { classToPlain } from "class-transformer";

export const EditContent: React.FC = () => {
  const [isLoading, setLoading] = React.useState(false);
  const currentUser =
    useSelector((state: RootState) => state.apps.userInfo) || false;
  const toast = useToast();

  const { getProfile } = useMain();

  const { formState, register } = useForm<UpdateUserDto>({
    identityClass: UpdateUserDto,
  });

  const {
    formState: passwordState,
    register: registerPassword,
    errors: errorsPaassword
  } = useForm<ChangeUserPasswordDto>({
    identityClass: ChangeUserPasswordDto,
  });

  /**
   * @dev The funtion to update user info.
   * @param {UpdateUserDto} dto
   */
  const handleUpdateProfile = React.useCallback(async () => {
    setLoading(true);
    try {
      await updateProfile(formState);
      await getProfile();
      toast({
        title: "Success",
        description: "Update profile successfully!",
        status: "success",
      })
      setLoading(false);
    } catch {
      toast({
        title: "Error",
        description: "Update profile failed!",
        status: "error",
      })
      setLoading(false);
    }
  }, [formState, currentUser]);

  /**
   * @dev The funtion to update user password.
   * @param {UpdateUserDto} dto
   */
  const handleUpdatePassword = React.useCallback(async () => {
    setLoading(true);
    try {
      await updatePassword(passwordState);
      await getProfile();
      toast({
        title: "Success",
        description: "Update password successfully!",
        status: "success",
      })
      setLoading(false);
    } catch {
      toast({
        title: "Error",
        description: "Update password failed!",
        status: "error",
      })
      setLoading(false);
    }
  }, [passwordState]);

  /**
   * @dev The function to check payload has changed.
   * @private
   */
  const isEditable = React.useMemo(() => {
    if (!formState || !currentUser) return false;
    const root = classToPlain(currentUser as UpdateUserDto);
    const _formState = classToPlain(formState);
    delete _formState["id_token"];
    return (Object.keys(_formState).filter((key: any) => {
      return root?.[key] === _formState?.[key]
    })).length !== Object.keys(_formState).length;
  }, [currentUser, formState]);

  return (
    <Tabs
      mt={"30px"}
      display={{ lg: "flex" }}
      variant={{ base: "solid", md: "ghost" }}
      onChange={() => setLoading(false)}
    >
      <TabList flexDirection={"column"} mx={"auto"}>
        <Tab justifyContent={"start"}>General</Tab>
        <Tab justifyContent={"start"}>Edit Profile</Tab>
        <Tab justifyContent={"start"}>Password</Tab>
      </TabList>
      <TabPanels flex={"0.8"} pt={"0.75rem"}>
        {/* General */}
        <TabPanel pt={0}>
          <Box>
            <Stack w={{ lg: "40%" }} spacing={4} lineHeight={"30px"}>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Username
                </FormLabel>
                <Input
                  border={"2px"}
                  borderRadius={"10px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="text"
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  defaultValue={currentUser?.username}
                  onChange={(e) => register("username", e.target.value)}
                />
                <Text fontSize={"15px"} color={"gray.400"}>
                  Your Imaginary URL: https://imaginary.com/{"MinhHung123"}
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Email
                </FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    defaultValue={currentUser?.email}
                    onChange={(e) => register("email", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Text fontSize="black" fontWeight="600">
                Segun Adebayo
                <Badge
                  borderRadius={"10%"}
                  size={"sm"}
                  ml="1"
                  colorScheme="pink"
                >
                  PRO
                </Badge>
              </Text>
            </Stack>
            <Box>
              <Highlight
                query={["Pro", "Pro Business"]}
                styles={{
                  display: "inline-flex",
                  lineHeight: "30px",
                  px: "1",
                  color: "pink",
                }}
              >
                With a Pro or Pro Business account, you can disable ads across
                the site.
              </Highlight>
              <br />
              <Button
                mt={"35px"}
                fontWeight={"500"}
                size={"md"}
                bg={"pink.400"}
                disabled={!isEditable}
                isLoading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdateProfile();
                }}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Edit Profile */}
        <TabPanel pt={0}>
          <Box>
            <Stack w={{ lg: "40%" }} spacing={4} lineHeight={"30px"}>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Name
                </FormLabel>
                <Input
                  border={"2px"}
                  borderRadius={"10px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  type="text"
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  defaultValue={currentUser?.name}
                  onChange={(e) => register("name", e.target.value)}
                />
                <Text fontSize={"15px"} color={"gray.400"}>
                  We’re big on real names around here, so people know who’s who.
                </Text>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Bio
                </FormLabel>
                <Textarea
                  border={"2px"}
                  borderRadius={"10px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  defaultValue={currentUser?.description}
                  onChange={(e) => register("description", e.target.value)}
                  height={150}
                />
                <Text fontSize={"15px"} color={"gray.400"}>
                  Brief description for your profile. URLs are hyperlinked.
                </Text>
              </FormControl>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Location
                </FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    defaultValue={currentUser?.location}
                    onChange={(e) => register("location", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Linkedin
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                  >
                    <SocialIcon url="https://linkedin.com/" style={{ border: "none" }}></SocialIcon>
                  </InputLeftElement>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    paddingLeft={"60px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    defaultValue={currentUser?.linkedin}
                    onChange={(e) => register("linkedin", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Twitter
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                  >
                    <SocialIcon url="https://twitter.com/" style={{ border: "none" }}></SocialIcon>
                  </InputLeftElement>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    paddingLeft={"60px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    defaultValue={currentUser?.twitter}
                    onChange={(e) => register("twitter", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Instagram
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                  >
                    <SocialIcon url="https://instagrama.com/" style={{ border: "none" }}></SocialIcon>
                  </InputLeftElement>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    paddingLeft={"60px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    defaultValue={currentUser?.instagram}
                    onChange={(e) => register("instagram", e.target.value)}
                  />
                </InputGroup>
              </FormControl>
            </Stack>
            <Button mt={"35px"} fontWeight={"500"} size={"md"} bg={"pink.400"}
              disabled={!isEditable}
              isLoading={isLoading}
              onClick={(e) => {
                e.preventDefault();
                handleUpdateProfile();
              }}
            >
              Save Changes
            </Button>
          </Box>
        </TabPanel>

        {/* Password */}
        <TabPanel pt={0}>
          <Box>
            <Stack w={{ lg: "40%" }} spacing={4} lineHeight={"30px"}>
              <FormControl lineHeight={"50px"}>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Old password
                </FormLabel>
                <Input
                  border={"2px"}
                  borderRadius={"10px"}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  _focus={{ bg: "white", borderColor: "pink.200" }}
                  value={passwordState?.oldPassword}
                  onChange={e => registerPassword("oldPassword", e.target.value)}
                  type="password"
                  placeholder="************"
                />
              </FormControl>
              <FormControl>
                <FormLabel color={"black"} fontWeight={"600"}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    borderRadius={"10px"}
                    fontWeight={"500"}
                    fontSize={"sm"}
                    border={"2px"}
                    _focus={{ bg: "white", borderColor: "pink.200" }}
                    value={passwordState?.newPassword}
                    onChange={e => registerPassword("newPassword", e.target.value)}
                    type="password"
                    placeholder="************"
                  />
                </InputGroup>
                <Text fontSize={"15px"} color={"gray.400"}>
                  Minimum 6 characters
                </Text>
              </FormControl>
            </Stack>
            <Button
              mt={"35px"}
              fontWeight={"500"}
              size={"md"}
              bg={"pink.400"}
              isLoading={isLoading}
              disabled={passwordState ? (Object.keys(classToPlain(passwordState)).length < 2) : true}
              onClick={(e) => {
                e.preventDefault();
                handleUpdatePassword();
              }}>
              Change
            </Button>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
