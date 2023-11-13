export const formattedText = (text: string | undefined) => {
  const result = text
    ? text
        .split(" - ")
        .map((line, index) => (index === 0 ? line : `- ${line}`))
        .join("\n")
    : "";
  return result;
};

