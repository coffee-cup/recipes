import * as React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const Title = (props: Props) => (
  <h1 className={`f1-ns f2 fw7 ${props.className}`}>{props.children}</h1>
);

export const SubTitle = (props: Props) => (
  <h2 className={`f2 fw7 ${props.className}`}>{props.children}</h2>
);

export const Text = (props: Props) => (
  <p className={`measure ${props.className}`}>{props.children}</p>
);

export const Detail = (props: Props) => (
  <span className={`f7 ${props.className}`}>{props.children}</span>
);
