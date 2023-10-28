import styled from "@emotion/styled";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #020202;
  font-weight: 500;
  padding: 0px 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  gap: 5px;
  border-bottom: 2px solid #000;
  cursor: pointer;
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const router = useRouter();
  return (
    <LayoutWrapper>
      <Header onClick={() => router.push("/")}>
        <Image src="logo.svg" alt="Logo" width={30} height={30} />
        <Heading>Let’s Prompt Me</Heading>
      </Header>
      <Content className="App">{children}</Content>
    </LayoutWrapper>
  );
};

export default Layout;
