"use client";

import { Button } from "@repo/ui-react/button";

export default function Page(): JSX.Element {
  return (
    <main className="container py-12">
      <div className="flex gap-2">
        <Button onClick={() => alert("Nice click")}>Click</Button>
        <Button disabled>Click</Button>
      </div>
    </main>
  );
}
