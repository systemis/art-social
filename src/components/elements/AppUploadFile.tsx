import React, { useCallback, useState } from "react";
import Dropzone, { Accept } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { uploadFile } from "redux/apps/thunk";
import {Box, Center, Icon, Spinner, Text} from "@chakra-ui/react";
import {FiUpload} from 'react-icons/fi';

declare const requestOK: (result: any, action: any) => any;

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

const defaultContentProps = { py: 8, px: 5 };

const AppUploadFile = function AppDropzone({
  type,
  onSuccess,
  preview = true,
  multiple = false,
  acceptType = ["PDF", "IMAGE", "VIDEO"],
  placeholder = "Drag and Drop / click to select file",
  endpoint,
}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.ui[uploadFile.typePrefix] || {});

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
        if (requestOK(resAction, uploadFile)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          res.push({fileName: file.name, fileType: file.type, accessUrl: resAction?.payload?.accessUrl});
        }
      }
      res = multiple ? [...(uploadedFiles || []), ...res] : res;
      setUploadedFiles(res);
      onSuccess(res);
      return;
    },
    [dispatch, endpoint, type, multiple, onSuccess, uploadedFiles]
  );

    const renderPlaceholder = () => {
      if (placeholder === null) {
        return null;
      }
      return (
        <Text fontSize="md" fontWeight="semibold">{placeholder}</Text>
      )
    }

    return (
      <Box cursor="pointer">
      <Dropzone onDrop={onUpload} accept={getAcceptFileTypes(acceptType)}>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <Center borderWidth={1} {...defaultContentProps}>
              {loading && <Spinner size="lg" />}
              <Icon as={FiUpload} boxSize={'25px'} />
              {renderPlaceholder()}
              <input {...getInputProps()} />
            </Center>
          </div>
        )}
      </Dropzone>
    </Box>
    )

};

export default AppUploadFile;
