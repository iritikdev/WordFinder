import React, { useEffect, useState } from "react";
import {
  IconButton,
  Input,
  FormControl,
  Text,
  Box,
  Heading,
  Stack,
  List,
  ListItem,
  UnorderedList,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import play from "../assets/play.svg";

function Searchbar(props) {
  const [query, setQuery] = useState("");
  const [definition, setDefinition] = useState();
  const [error, setError] = useState();

  const handleSearch = async () => {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    setQuery("");
    setDefinition(data);
  };

  const audio = new Audio(definition?.[0].phonetics?.[0].audio);
  return (
    <>
      <FormControl
        my={5}
        display="flex"
        alignItems={"center"}
        justifyContent={"center "}
        backgroundColor={"#f5f5f5"}
      >
        <InputGroup alignItems={"center"}>
          <Input
            placeholder="Search for any word..."
            type="text"
            size={"lg"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            py={7}
            px={5}
            borderRadius={16}
            overflow={"hidden"}
          />
          <InputRightElement
            pt={4}
            pr={4}
            children={<BsSearch size={22} color="#a445ed" />}
            onClick={handleSearch}
          />
        </InputGroup>
      </FormControl>
      <Box>
        <Flex justifyContent={"space-between"}>
          <Stack>
            <Heading as="h1" size="4xl" noOfLines={1}>
              {definition?.[0].word}
            </Heading>
            <Text>{definition?.[0].phonetics[0]?.text}</Text>
          </Stack>
          {definition?.[0].phonetics && (
            <img src={play} onClick={() => audio.play()} />
          )}
        </Flex>

        {definition?.[0].meanings.map((item) => (
          <Box>
            <Stack direction="row" columnGap={2} alignItems={"center"} my={4}>
              <Heading size={"md"}>{item.partOfSpeech}</Heading>
              <hr
                style={{
                  width: "100%",
                }}
              />
            </Stack>

            <Stack mb={8}>
              <Text mb={3}>Meaning</Text>
              <UnorderedList pl={4}>
                {item?.definitions.map((def) => (
                  <ListItem>{def?.definition}</ListItem>
                ))}
              </UnorderedList>
            </Stack>

            {item?.synonyms.length !== 0 && (
              <Stack direction={"row"}>
                <Text>Synonyms: </Text>
                {item?.synonyms.map((synonym) => (
                  <span>{synonym}</span>
                ))}
              </Stack>
            )}
            {item?.antonyms.length !== 0 && (
              <Stack direction={"row"}>
                <Text>Antonyms: </Text>
                {item?.antonyms.map((antonym) => (
                  <span>{antonym}</span>
                ))}
              </Stack>
            )}
          </Box>
        ))}

        {definition?.[0].sourceUrls.length === 0 && (
          <Stack direction={"row"}>
            <Text>Source: </Text>
            {definition?.[0].sourceUrls.map((url) => (
              <a href={url}>{url}</a>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
}

export default Searchbar;
