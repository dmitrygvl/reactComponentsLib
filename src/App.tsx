import React from "react";
import {
  HorizontalLine,
  LineType,
} from "./components/HorizontalLine/HorizontalLine";
import { Heading } from "./components/Heading/Heading";
import { Details } from "./components/Details/Details";
import { Paragraph, ParagraphStyles } from "./components/Paragraph/Paragraph";
import { Image, Float, monkey, cat } from "./components/Image/Image";
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <Heading title={"React Component Library"} />
      <HorizontalLine />
      <Details title="Heading examples">
        <Details title="h1">
          <Heading level={1} />
        </Details>
        <Details title="h2">
          <Heading level={2} />
        </Details>
        <Details title="h3">
          <Heading level={3} />
        </Details>
        <Details title="h4">
          <Heading level={4} />
        </Details>
        <Details title="h5">
          <Heading level={5} />
        </Details>
        <Details title="h6">
          <Heading level={6} />
        </Details>
      </Details>
      <HorizontalLine />
      <Details title="Horizontal lines examples">
        <Details title="Horizontal line solid">
          <HorizontalLine />
        </Details>
        <Details title="Horizontal line double">
          <HorizontalLine lineType={LineType.Double} />
        </Details>
        <Details title="Horizontal line dashed">
          <HorizontalLine lineType={LineType.Dashed} />
        </Details>
      </Details>
      <HorizontalLine />
      <Details title="Paragraphs examples">
        <Details title="Paragraph regular">
          <Paragraph fontStyle={ParagraphStyles.Regular} />
        </Details>
        <Details title="Paragraph quote">
          <Paragraph fontStyle={ParagraphStyles.Quote} />
        </Details>
        <Details title="Paragraph bold">
          <Paragraph fontStyle={ParagraphStyles.Bold} />
        </Details>
      </Details>
      <HorizontalLine />
      <Details title="Image with text examples">
        <Details title="Image float none">
          <Image />
        </Details>
        <Details title="Image float left">
          <Image float={Float.Left} src={monkey} alt="Picture with monkey" />
        </Details>
        <Details title="Image float right">
          <Image float={Float.Right} src={cat} alt="Picture with cat" />
        </Details>
      </Details>
      <HorizontalLine />
    </main>
  );
}
