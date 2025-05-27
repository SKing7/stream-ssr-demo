import { Suspense } from "react";
import SlowComponent from "@/components/slow1";
import VerySlowComponent from "@/components/slow2";
import ExtremelySlowComponent from "@/components/slow3";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">流式 SSR 演示</h1>

      {/* 这部分内容会立即显示 */}
      <div className="mb-8 p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">即时内容</h2>
        <p>这部分内容会立即渲染并发送到客户端。</p>
      </div>

      {/* 使用 Suspense 包裹慢组件，实现流式渲染 */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Suspense fallback={<LoadingCard title="慢组件" />}>
          <SlowComponent />
        </Suspense>

        <Suspense fallback={<LoadingCard title="很慢组件" />}>
          <VerySlowComponent />
        </Suspense>

        <Suspense fallback={<LoadingCard title="极慢组件" />}>
          <ExtremelySlowComponent />
        </Suspense>
      </div>
    </main>
  );
}

function LoadingCard({ title }: { title: string }) {
  return (
    <div className="border rounded p-4 bg-gray-100">
      <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      <p className="mt-4 text-gray-500">正在加载 {title}...</p>
    </div>
  );
}
