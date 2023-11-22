"use client";
import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { allPrompts } from "@/data/prompts";
import Header from "../header";

const { Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

interface IProps {
  children: React.ReactNode;
  breadcrumbs?: { title: string; location?: string }[];
}

const HomeLayout = ({ children, breadcrumbs }: IProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout style={{ minHeight: "100dvh" }}>
      <Header />
      <Layout>
        <Sider
          width={350}
          style={{ background: colorBgContainer }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={[
              {
                key: `home`,
                icon: <HomeOutlined />,
                label: `Home`,
                onClick: () => {
                  window.location.href = `/`;
                },
              },
              {
                key: `promps`,
                icon: <BookOutlined />,
                label: `Prompts`,
                children: allPrompts.map((category, index) => ({
                  key: `cat-${index}`,
                  label: category.title,
                  onClick: () => {
                    window.location.href = `/prompts/${category.id}`;
                  },
                })),
              },
            ]}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {breadcrumbs && (
            <Breadcrumb style={{ margin: "16px 0" }}>
              {breadcrumbs.map((crumb, index) => (
                <Breadcrumb.Item
                  key={`crumb-${index}`}
                  onClick={
                    crumb.location
                      ? () => {
                          window.location.href = crumb.location!;
                        }
                      : undefined
                  }
                  href={crumb.location ? crumb.location! : undefined}
                >
                  {crumb.title}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          )}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              marginTop: !breadcrumbs ? 16 : 0,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
