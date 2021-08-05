import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
const DropZoneImage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <Flex
      {...getRootProps()}
      direction="column"
      w="full"
      py={8}
      px={4}
      mt={{ base: 4, md: 8 }}
      borderColor="gray.300"
      borderRadius={16}
      borderWidth={2}
      bg="white"
    >
      <input {...getInputProps()} />
      <Text fontWeight="semibold" fontSize={20} color="blackAlpha.800">
        Drag 'n' drop some files here, or click to select files ( Max 10 )
      </Text>

      <Box my={2} />
      <Box>
        {acceptedFiles.length > 0 ? (
          acceptedFiles.map((acceptedFile) =>
            acceptedFile.map((file) => <li>{file.name}</li>)
          )
        ) : (
          <Text color="blackAlpha.700">No Image Selected...</Text>
        )}
      </Box>
    </Flex>
  );
};

export default DropZoneImage;
