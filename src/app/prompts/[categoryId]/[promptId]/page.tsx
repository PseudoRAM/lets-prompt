"use client";
import HomeLayout from "@/components/home-layout";
import {
  getPromptByCategoryAndId,
  getPromptCategoriesById,
} from "@/data/prompts";
import { Stack, Textarea } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button, Collapse } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PromptPagePage = ({
  params,
}: {
  params: { categoryId: string; promptId: string };
}) => {
  const promptData = getPromptByCategoryAndId(
    params.categoryId,
    params.promptId
  );

  const [ideaPrompt, setIdeaPrompt] = useState<string>(
    promptData.prompt?.prompt ?? ""
  );
  const [inputFocussed, setInputFocussed] = useState<boolean>(false);

  return (
    <HomeLayout
      breadcrumbs={[
        {
          title: "Home",
          location: "/",
        },
        {
          title: promptData.category?.title ?? "",
          location: `/prompts/${params.categoryId}`,
        },
        {
          title: promptData.subTitle ?? "",
        },
      ]}
    >
      <h1>{promptData?.prompt?.title}</h1>
      <Container>
        <p
          style={{
            marginTop: 10,
          }}
        >
          {promptData?.prompt?.description}
        </p>

        <TextArea
          onChange={(e) => setIdeaPrompt(e.target.value)}
          onFocus={() => setInputFocussed(true)}
          onBlur={() => setInputFocussed(false)}
          value={ideaPrompt}
          placeholder="Enter prompt here, refresh page to bring back original prompt"
          autoSize={{ minRows: 2 }}
        />
        <Button
          type="primary"
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
      </Container>
    </HomeLayout>
  );
};

export default PromptPagePage;
