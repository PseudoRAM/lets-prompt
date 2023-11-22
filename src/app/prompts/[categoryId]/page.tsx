"use client";

import HomeLayout from "@/components/home-layout";
import { getPromptCategoriesById } from "@/data/prompts";
import { Button, Collapse } from "antd";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PromptCategoryPage = ({ params }: { params: { categoryId: string } }) => {
  const prompts = getPromptCategoriesById(params.categoryId);
  return (
    <HomeLayout>
      <h1 style={{ marginBottom: 20 }}>{prompts?.title}</h1>
      <Container>
        {prompts?.categories.map((category, index) => {
          return (
            <div key={`page-cat-${index}`}>
              <h2 style={{ marginBottom: 10 }}>{category.title}</h2>
              <Collapse
                items={category.prompts.map((p) => ({
                  key: p.id,
                  label: p.title,
                  children: (
                    <>
                      <p style={{ marginBottom: 10 }}>{p.description}</p>
                      <Button
                        type="primary"
                        onClick={() => {
                          window.location.href = `/prompts/${params.categoryId}/${p.id}`;
                        }}
                      >
                        Try
                      </Button>
                    </>
                  ),
                }))}
              />
            </div>
          );
        })}
      </Container>
    </HomeLayout>
  );
};

export default PromptCategoryPage;
