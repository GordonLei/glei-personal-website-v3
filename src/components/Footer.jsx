import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="flex flex-row my-16">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        Built with mainly <Link href="https://astro.build">Astro</Link> and{" "}
        <Link href="https://nextui.org">Tailwind CSS</Link> and{" "}
        <Link href="https://nextui.org">NextUI</Link>, deployed with{" "}
        <Link href="https://www.netlify.com">Netlify</Link>
      </div>
    </div>
  );
}
