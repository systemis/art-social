import { Box, Button, Input } from "@chakra-ui/react";
import { AppRow } from "components/elements";
import AppUploadFile, {
  UploadResponse,
} from "components/elements/AppUploadFile";
import { ENDPOINT } from "constants/endpoints";
import { UPLOAD_IMAGE_TYPES } from "constants/upload";
import React from "react";
import {useHistory} from "react-router-dom";

const CreateProduct = () => {
  const history = useHistory();
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
        >
          Continue
        </Button>
      </AppRow>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Input
          placeholder="Name your design..."
          variant="unstyled"
          fontWeight="700"
          borderWidth={0}
          marginTop="1em"
          w="60vw"
          fontSize="3xl"
        />
        <AppUploadFile
          type={UPLOAD_IMAGE_TYPES.DESIGN_IMAGE}
          onSuccess={(files: UploadResponse[]) => {
            // We gonna save data here
            console.log(files);
          }}
          acceptType={["IMAGE"]}
          endpoint={ENDPOINT.FILE_UPLOAD}
        />
        <Input
          placeholder="Give us some description about your design..."
          variant="unstyled"
          fontWeight="400"
          borderWidth={0}
          marginTop="2em"
          w="60vw"
          fontSize="xl"
        />
      </Box>
    </Box>
  );
};

export default CreateProduct;
