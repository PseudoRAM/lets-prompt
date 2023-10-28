"use client";

import {
  Button,
  Flex,
  Heading,
  Stack,
  StylesProvider,
  Text,
  Textarea,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import Styles from "@/styles/home/styles";
export default function Home() {
  const router = useRouter();

  const [ideaPrompt, setIdeaPrompt] = useState<string>();
  const [inputFocussed, setInputFocussed] = useState<boolean>(false);

  return (
    <Layout>
      <Styles.OuterWrapper>
        <Stack
          minH={"calc(100vdh - 50px)"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Learn how to prompt
                </Text>
                <br />
                <Text color={"blue.400"} as={"span"}>
                  by prompting
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Curated AI prompt templates categorized by role and outcome.
                Learn to produce high quality results by seeing how others
                communicate with AI!
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  bg="blue.500"
                  color="white"
                  _hover={{
                    bg: "blue.400",
                  }}
                  border="2px solid #000"
                  onClick={() => router.push("/bing")}
                >
                  Bing Prompts
                </Button>
                <Button>How It Works</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"contain"}
              src={"/five.svg"}
            />
          </Flex>
        </Stack>
      </Styles.OuterWrapper>
    </Layout>
  );
}
