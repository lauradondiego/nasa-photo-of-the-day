import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import header from "../Img/header.jpg";

const src = "../Img/header.jpg";

export const HeaderExampleUsersIcon = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Image src={header} circular />
      {/* <Icon name="users" circular /> */}
      <Header.Content>NASA Photo of the Day</Header.Content>
    </Header>
  </div>
);
