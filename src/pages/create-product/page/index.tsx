import { Box, Button } from "@chakra-ui/react";
import { AppRow } from "components/elements";
import AppUploadFile, {
  UploadResponse,
} from "components/elements/AppUploadFile";
import { ENDPOINT } from "constants/endpoints";
import { UPLOAD_IMAGE_TYPES } from "constants/upload";
import React from "react";

const CreateProduct = () => {
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
      <Box>
        <AppUploadFile
          type={UPLOAD_IMAGE_TYPES.DESIGN_IMAGE}
          onSuccess={(files: UploadResponse[]) =>
            console.log(files?.[0].accessUrl)
          }
          acceptType={["IMAGE"]}
          endpoint={ENDPOINT.FILE_UPLOAD}
        />
      </Box>
    </Box>
  );
};

export default CreateProduct;
