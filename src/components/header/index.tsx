import styled from "@emotion/styled";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #020202;
  font-weight: 500;
  padding: 0px 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  gap: 5px;
  border-bottom: 2px solid #000;
  cursor: pointer;
  background-color: #ffffff;
`;

interface IProps {
  children: React.ReactNode;
}

const Header = () => {
  const router = useRouter();
  return (
    <HeaderWrapper onClick={() => router.push("/")}>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <Heading>Let’s Prompt Me</Heading>
    </HeaderWrapper>
  );
};

export default Header;
