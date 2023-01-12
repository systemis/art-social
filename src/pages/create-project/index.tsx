import React, {useState} from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { AppRow } from "components/elements";
import AppUploadFile, {
  UploadResponse,
} from "components/elements/AppUploadFile";
import { ENDPOINT } from "constants/endpoints";
import { UPLOAD_IMAGE_TYPES } from "constants/upload";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {getStorageProvider} from "providers";
import {PAGES} from "constants/app";

const CreateProject: React.FC = () => {
  const history = useHistory();
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const storageProvider = getStorageProvider();
  const id_token = storageProvider.getItem("id_token")
  const access_token = storageProvider.getItem("access_token")
  let productId = ""
  const [gallery, setGallery] = useState([]);

  const handleOnSuccessUpload = (files: UploadResponse[]) => {
    const newGallery = [...gallery, files[files.length - 1].accessUrl]
    setGallery(newGallery);
  }

  const createProjectParams = {
    name: projectName,
    description: projectDesc,
  }

  const handleUploadProduct = async () => {
    try {
      const response = await axios.post(`https://afternoon-gorge-11599.herokuapp.com/api/project`, {
        ...createProjectParams,
        id_token,
        image: gallery[0]
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      productId = response?.data?.data?._id;
      history.push(PAGES.EXPLORE)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box>
      <Box
        pt="80px"
        background="linear-gradient(180deg, rgba(227,197,236,1) 0%, rgba(214,198,224,1) 22%, rgba(255,255,255,1) 100%)"
        height="100px"
      ></Box>
      <AppRow px="3em">
        <Box flex="1">
          <Button
            color="#0d0c22"
            fontWeight="semibold"
            fontSize="sm"
            backgroundColor="white"
            boxShadow="0px 0px 0px 2px #e7e7e9 inset"
            px="14px"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
        </Box>

        <Button
          color="#0d0c22"
          fontWeight="semibold"
          fontSize="sm"
          backgroundColor="#e7e7e9"
          px="14px"
        >
          Save as draft
        </Button>
        <Button
          backgroundColor="#ea4c89"
          fontWeight="semibold"
          fontSize="sm"
          px="14px"
          ml="1.5em"
          onClick={handleUploadProduct}
        >
          Continue
        </Button>
      </AppRow>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Input
          placeholder="Name your project..."
          variant="unstyled"
          fontWeight="700"
          borderWidth={0}
          marginTop="1em"
          w="60vw"
          fontSize="3xl"
          onChange={({target}) => setProjectName(target.value)}
        />
        <AppUploadFile
          type={UPLOAD_IMAGE_TYPES.DESIGN_IMAGE}
          onSuccess={(files: UploadResponse[]) => {
            handleOnSuccessUpload(files);
          }}
          acceptType={["IMAGE"]}
          endpoint={ENDPOINT.FILE_UPLOAD}
        />
        <Textarea
          placeholder="Give us some description about your project..."
          variant="unstyled"
          fontWeight="400"
          borderWidth={0}
          marginTop="2em"
          w="60vw"
          height="300px"
          fontSize="xl"
          focusBorderColor="red"
          _focus={{outline: "none"}}
          onChange={(e) => setProjectDesc(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default CreateProject;
