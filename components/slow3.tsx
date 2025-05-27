import { delay } from "@/lib/utils";

export default async function ExtremelySlowComponent() {
  // 模拟数据获取延迟
  await delay(6000);

  return (
    <div className="border rounded p-4 bg-purple-50">
      <h2 className="text-xl font-semibold mb-2">极慢组件</h2>
      <p>这个组件延迟了 6 秒钟才渲染完成。</p>
      <p className="mt-2 text-sm text-gray-500">
        渲染时间: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
