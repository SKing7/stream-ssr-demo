import { delay } from "@/lib/utils";

export default async function SlowComponent() {
  // 模拟数据获取延迟
  await delay(2000);

  return (
    <div className="border rounded p-4 bg-blue-50">
      <h2 className="text-xl font-semibold mb-2">慢组件</h2>
      <p>这个组件延迟了 2 秒钟才渲染完成。</p>
      <p className="mt-2 text-sm text-gray-500">
        渲染时间: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
