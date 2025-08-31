import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="p-4 bg-gray-200 texty-center"
    >
      <div> {blok.text} </div>
    </footer>
  );
}
