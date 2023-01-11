import React, { useCallback, useState } from "react";
import Dropzone, { Accept } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { uploadFile } from "redux/apps/thunk";
import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import { AppRow } from "components/elements/AppRow";
import { placeholderUpload } from "assets/images";
import { MAX_SIZE } from "utils";

export interface UploadResponse {
  fileName: string;
  fileType: string;
  accessUrl: string;
}

type AcceptType = "VIDEO" | "PDF" | "IMAGE" | "AUDIO";

interface Props {
  type: string;
  placeholder?: string | null;
  onSuccess: (arg: UploadResponse[]) => any;
  acceptType?: AcceptType[];
  multiple?: boolean;
  preview?: boolean;
  endpoint?: string;
}

const getAcceptFileTypes = (types: AcceptType[]): Accept => {
  const map = {
    VIDEO: "video/*",
    AUDIO: "audio/*",
    IMAGE: "image/*",
    PDF: "application/pdf",
  };
  const accept = {} as Accept;
  types.forEach((type) => {
    if (map[type]) {
      accept[map[type]] = [];
    }
  });
  return accept;
};



const defaultContentProps = { width: "60vw", height: "40vh" };

const AppUploadFile = function AppDropzone({
  type,
  onSuccess,
  preview = true,
  multiple = true,
  acceptType = ["PDF", "IMAGE", "VIDEO"],
  placeholder = "Drag and Drop / click to select file",
  endpoint,
}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector(
    (state: RootState) => state.ui[uploadFile.typePrefix] || {}
  );

  const [uploadedFiles, setUploadedFiles] = useState<UploadResponse[]>([]);

  const onUpload = useCallback(
    async (acceptedFiles: string | any[]) => {
      if (!acceptedFiles || acceptedFiles.length === 0) {
        return;
      }
      let res: UploadResponse[] = [];

      for await (const file of acceptedFiles) {
        if (file.size > MAX_SIZE) {
          console.log("File is too large. Please upload file under 10MB");
          return;
        }
        const resAction = await dispatch(
          uploadFile({
            file,
            fileName: file.name,
            type,
            endpoint,
          })
        );

        if (resAction) {
          res.push({
            fileName: file.name,
            fileType: file.type,
            accessUrl: resAction.payload ? resAction.payload.toString() : "",
          });
        }
      }
      res = multiple ? [...(uploadedFiles || []), ...res] : res;
      setUploadedFiles(res);
      onSuccess(res);
      return;
    },
    [dispatch, endpoint, type, multiple, onSuccess, uploadedFiles]
  );

  const onRemovePreview = (f: UploadResponse) => {
    setUploadedFiles(
      uploadedFiles.filter((file) => file.accessUrl !== f.accessUrl)
    );
  };

  const renderPreview = () => {
    if (!preview || !uploadedFiles || uploadedFiles.length === 0) {
      return null;
    }

    return (
      <AppRow
        flexDirection="row"
        flexWrap="wrap"
        mt={3}
        w="100%"
        h="100px"
        objectFit="cover"
      >
        {uploadedFiles?.map((f: UploadResponse, i) => {
          if (!f.fileType.includes("image")) {
            return null;
          }
          return (
            <Image
              src={`${f.accessUrl}`}
              key={`image-index-${f.accessUrl}`}
              mr="2"
              w="12%"
              h="100px"
              borderColor="#e7e7e9"
              objectFit="cover"
              borderWidth={3}
              borderStyle="dashed"
              borderRadius="1em"
            />
          );
        })}
      </AppRow>
    );
  };

  const renderPlaceholder = () => {
    if (placeholder === null) {
      return null;
    }
    return (
      <Center display="flex" flexDirection="column">
        <Image src={placeholderUpload} w="30%" />
        <Text fontSize="md" fontWeight="normal" my={5} textAlign="center">
          {placeholder}
          <Text color="#6e6d7a" mt={1}>
            High resolution recommended. Max 10MB each (7 files only)
          </Text>
          <Text color="#6e6d7a" mt={4} fontStyle="italic" fontSize="xs">
            *Only upload media you own the rights to
          </Text>
        </Text>
      </Center>
    );
  };

  return (
    <Box cursor="pointer" marginTop="2em">
      {uploadedFiles.length !== 7 ? (
        <Dropzone
          onDrop={onUpload}
          accept={getAcceptFileTypes(acceptType)}
          maxFiles={7}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} style={{ height: "40vh" }}>
              <Center
                borderColor="#e7e7e9"
                borderWidth={3}
                borderStyle="dashed"
                borderRadius="1em"
                {...defaultContentProps}
              >
                {loading && <Spinner size="lg" />}
                {renderPlaceholder()}
                <input {...getInputProps()} />
              </Center>
            </div>
          )}
        </Dropzone>
      ) : (
        <Center display="flex" flexDirection="column">
          <Image src={placeholderUpload} w="10%" />
          <Text fontSize="md" fontWeight="normal" my={5} textAlign="center">
            <Text color="#6e6d7a" mt={1}>
              Maximum images uploaded!
            </Text>
          </Text>
        </Center>
      )}
      {renderPreview()}
    </Box>
  );
};

export default AppUploadFile;
