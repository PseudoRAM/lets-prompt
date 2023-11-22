"use client";

import React from "react";
import { Button, Card, Col, ConfigProvider, Row } from "antd";
import HomeLayout from "@/components/home-layout";
import { allPrompts } from "@/data/prompts";

const HomePage = () => (
  <HomeLayout>
    <h1>Let&apos;s Prompt Me</h1>
    <p style={{ maxWidth: 500, marginTop: 10 }}>
      Curated AI prompt templates categorized by role and outcome. Learn to
      produce high quality results by seeing how others communicate with AI!
    </p>
    <Row gutter={[16, 16]} style={{ maxWidth: 700, marginTop: 30 }}>
      {allPrompts.map((prompt) => (
        <Col span={8} key={`cat-p-${prompt.id}`}>
          <Card
            bordered
            hoverable
            onClick={() => {
              window.location.href = `/prompts/${prompt.id}`;
            }}
            style={{
              minHeight: 100,
            }}
          >
            {prompt.title}
          </Card>
        </Col>
      ))}
    </Row>
  </HomeLayout>
);

export default HomePage;
