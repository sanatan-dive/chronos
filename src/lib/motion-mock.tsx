import React from 'react';

export interface MotionProps {
  initial?: any;
  animate?: any;
  whileHover?: any;
  whileInView?: any;
  transition?: any;
  viewport?: any;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// This is a simplified mock that applies basic animations using CSS classes
export const motion = {
  div: (props: MotionProps & React.HTMLProps<HTMLDivElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    // In a real implementation, these would control animations
    // Here we're just passing through the component
    return <div {...rest} style={style || {}} />;
  },
  section: (props: MotionProps & React.HTMLProps<HTMLElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <section {...rest} style={style || {}} />;
  },
  span: (props: MotionProps & React.HTMLProps<HTMLSpanElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <span {...rest} style={style || {}} />;
  },
  p: (props: MotionProps & React.HTMLProps<HTMLParagraphElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <p {...rest} style={style || {}} />;
  },
  h1: (props: MotionProps & React.HTMLProps<HTMLHeadingElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <h1 {...rest} style={style || {}} />;
  },
  h2: (props: MotionProps & React.HTMLProps<HTMLHeadingElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <h2 {...rest} style={style || {}} />;
  },
  ul: (props: MotionProps & React.HTMLProps<HTMLUListElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <ul {...rest} style={style || {}} />;
  },
  li: (props: MotionProps & React.HTMLProps<HTMLLIElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <li {...rest} style={style || {}} />;
  },
  button: (props: MotionProps & React.HTMLProps<HTMLButtonElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    // @ts-ignore
    return <button {...rest} style={style || {}} />;
  },
  a: (props: MotionProps & React.HTMLProps<HTMLAnchorElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <a {...rest} style={style || {}} />;
  },
  img: (props: MotionProps & React.HTMLProps<HTMLImageElement>) => {
    const { initial, animate, whileInView, whileHover, transition, viewport, style, ...rest } = props;
    return <img {...rest} style={style || {}} />;
  },
};