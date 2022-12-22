import React, { useCallback, useState } from "react";
import Dropzone, { Accept } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { uploadFile } from "redux/apps/thunk";
import { Box, Center, Icon, Image, Spinner, Text } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { AppRow } from "components/elements/AppRow";
import AppImage from "components/elements/AppImage";

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

const maxSize = 10485760; // 1048576 Bytes * 10 = 10M

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
        if (file.size > maxSize) {
          console.log("File is too large. Please upload file under 3MB");
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
      <AppRow flexDirection="row" flexWrap="wrap" mt={3}>
        {uploadedFiles?.map((f: UploadResponse, i) => {
          if (!f.fileType.includes("image")) {
            return null;
          }
          return (
            <AppImage
              boxSize="100px"
              url={`${f.accessUrl}`}
              containerClasses="mb-2"
              key={`image-index-${f.fileName}`}
              onClose={() => onRemovePreview(f)}
              mr="2"
              objectFit="cover"
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
        <Icon as={FiUpload} boxSize={"105px"} mb="1em" />
        <Text fontSize="md" fontWeight="semibold">
          {placeholder}
        </Text>
      </Center>
    );
  };

  return (
    <Box cursor="pointer" marginTop="2em">
      <Dropzone onDrop={onUpload} accept={getAcceptFileTypes(acceptType)}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ height: "40vh" }}>
            <Center
              borderWidth={3}
              borderStyle="dashed"
              borderRadius="2em"
              {...defaultContentProps}
            >
              {loading && <Spinner size="lg" />}
              {renderPlaceholder()}
              <input {...getInputProps()} />
            </Center>
          </div>
        )}
      </Dropzone>
      {renderPreview()}
    </Box>
  );
};

export default AppUploadFile;
