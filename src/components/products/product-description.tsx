import { decode } from "html-entities";

export default function ProductDescription({
  description,
}: {
  description: string;
}) {

  return (
    <div
    dangerouslySetInnerHTML={{ __html: decode(description) }}
    />
  );
}
