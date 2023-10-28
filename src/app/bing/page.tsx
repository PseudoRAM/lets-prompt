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

  const [ideaPrompt, setIdeaPrompt] = useState<string>(
    "Write a clear and engaging presentation that highlights the key findings and implications of our study on mental health impacts of long-term remote work."
  );
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
              <Textarea
                placeholder="Here is a sample placeholder"
                onChange={(e) => setIdeaPrompt(e.target.value)}
                onFocus={() => setInputFocussed(true)}
                onBlur={() => setInputFocussed(false)}
                value={ideaPrompt}
                size="lg"
                borderRadius="lg"
                borderColor={inputFocussed ? "blue.400" : "gray.200"}
                _focus={{
                  borderColor: "blue.400",
                }}
              />
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => {
                  // open new tab
                  window.open(
                    `https://www.bing.com/search?showconv=1&sendquery=1&q=${encodeURIComponent(
                      ideaPrompt ?? ""
                    )}`,
                    "_blank"
                  );
                }}
              >
                Go
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Styles.OuterWrapper>
    </Layout>
  );
}
