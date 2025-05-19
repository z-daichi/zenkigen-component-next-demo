"use client";
import { Button } from '@zenkigen-inc/component-ui';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button variant="fill">test</Button>
        <Button variant="outline">test</Button>
        <Button variant="fillDanger">test</Button>
        <Button variant="text">test</Button>
      </main>
    </div>
  );
}
