import { Column, Line, Row } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import BlogHeading from "./BlogHeading";

export default function BlogSection() {
  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>
      <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
        <Row flex={1} paddingLeft="l" paddingTop="24">
          <BlogHeading />
        </Row>
        <Row flex={3} paddingX="20">
          <Posts range={[1, 2]} columns="2" />
        </Row>
      </Row>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <Line maxWidth={48} />
      </Row>
    </Column>
  );
}
