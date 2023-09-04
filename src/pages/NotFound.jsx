import { usePageTitleAndMeta } from "../components/PageTitleAndMeta";
export default function NotFound() {
  usePageTitleAndMeta("Bear Digital Studios: Not Found", "Page not found.");
  return (
    <main>
      <h1>Not Found</h1>
    </main>
  );
}
