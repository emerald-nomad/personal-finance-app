import { Input } from "@/components/Input";
import SearchIcon from "@/images/icon-search.svg";
// import PrefixIcon from "@/images/mo"
export default function Home() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Input
        label="Basic Field"
        id="Test"
        placeholder="Placeholder"
        helperText="Helper text"
      />
      <Input
        label="Field with icon"
        id="IconField"
        placeholder="Placeholder"
        helperText="Helper text"
        suffixIcon={<SearchIcon />}
      />
      <Input
        label="Field with prefix"
        id="prefix"
        placeholder="Placeholder"
        helperText="Helper text"
        prefix="$"
      />
      <Input
        label="Field with color tag"
        id="color-tag"
        placeholder="Placeholder"
        helperText="Helper text"
        colorTag="green"
      />
      <Input
        label="Field with color tag red"
        id="color-tag-red"
        placeholder="Placeholder"
        helperText="Helper text"
        colorTag="red"
      />
    </div>
  );
}
