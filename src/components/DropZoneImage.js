import { IconButton } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
const DropZoneImage = ({ acceptedFiles, setAcceptedFiles }) => {
  const onDrop = useCallback((files) => {
    setAcceptedFiles([...acceptedFiles, files]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onabort = () => console.log("file reading was aborted");
    //   reader.onerror = () => console.log("file reading has failed");
    //   reader.onload = () => {
    //     // Do whatever you want with the file contents
    //     const binaryStr = reader.result;
    //     console.log(binaryStr);
    //   };
    //   reader.readAsArrayBuffer(file);
    // });
  }, []);

  const remove = (sFile) => {
    // const tempAccepted = acceptedFiles[0].filter(
    //   (file) => file.name !== sFile.name
    // );
    // console.log(tempAccepted[1]);
    // setAcceptedFiles(tempAccepted);
    // remove the file from the array
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <Flex
      direction="column"
      w="full"
      borderColor="gray.300"
      borderRadius={16}
      borderWidth={2}
      py={8}
      px={4}
      mt={{ base: 4, md: 8 }}
      bg="white"
    >
      <Flex
        {...getRootProps()}
        direction="column"
        w="full"
        boxShadow="sm"
        pb={{ base: 4, md: 8 }}
      >
        <input {...getInputProps()} />
        <Text fontWeight="semibold" fontSize={20} color="blackAlpha.700">
          Drag 'n' drop some files here, or click to select files ( Max 10 )
        </Text>
      </Flex>

      <Box my={2} />

      <Box>
        {acceptedFiles.length > 0 ? (
          acceptedFiles.map((acceptedFile) =>
            acceptedFile.map((file) => (
              <Flex align="center">
                <Text>{file.name}</Text>
                <Box mx={1} />
                {/* <IconButton
                  bg="transparent"
                  onClick={() => remove(file)}
                  color="brand.600"
                  fontSize={24}
                  icon={<AiOutlineCloseCircle />}
                /> */}
              </Flex>
            ))
          )
        ) : (
          <Text color="blackAlpha.700">No Image Selected...</Text>
        )}
      </Box>
    </Flex>
  );
};

export default DropZoneImage;
