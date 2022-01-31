import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../../Other/Meta";
import { Container, ContainerLimited } from "../../Molecules/Container";
import { ContentHeader, Content } from "../../Molecules/Content";
import { useFooterMenu } from "../../../hooks";
import { HeaderMobile, Header } from "../../Organisms/Header";
import { FooterMobile, Footer } from "../../Organisms/Footer";



const Page = ({ data }) => {
  const footerMenuItems = useFooterMenu();
  const { title, content } = data.wpPage;
  const contents = <Content content={content} />;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container>
          <ContentHeader title={title} size="h3" paddingBottom="md" />
          {contents}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContainerLimited>
            <ContentHeader title={title} size="h1" paddingBottom="md" />
            {contents}
          </ContainerLimited>
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;

export default Page;
