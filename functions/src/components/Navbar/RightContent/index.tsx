import React from "react";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthModal from "../../Modal/Auth";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import MenuWrapper from "./ProfileMenu/MenuWrapper";

type RightContentProps = {
    user: User;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
        return (
    <Flex
      // width={{ sm: "auto", md: "300px" }}
      justifyContent="space-between"
      alignItems="center"
    >
      {user ? <Icons /> : <AuthButtons />}
      <MenuWrapper />
 
    </>
        );
    };

export default RightContent;