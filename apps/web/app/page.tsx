"use client";

import { TrashCanIcon } from "@repo/icons-limestone/react";
import { Button } from "@repo/ui-react/button";

export default function Page(): JSX.Element {
  return (
    <main className="container py-12">
      <p>Turborepo + shadcn + tailwind + fetch and build scripts</p>
      <div className="flex gap-2">
        <Button>Hi there!</Button>
        <Button size="lg">Hi there!</Button>
        <Button size="sm">Hi there!</Button>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-700">
          Oh hello there!
        </Button>
        <Button variant="secondary">Hi there!</Button>
        <Button variant="destructive" size="lg">
          Delete me
          <TrashCanIcon size="sm" />
        </Button>
      </div>
    </main>
  );
}
