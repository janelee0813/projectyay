import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: "70vh" }}
    >
      <p className="font-en text-sm font-semibold tracking-[0.2em] text-ink-soft uppercase">
        404
      </p>
      <h1 className="mt-4 font-en font-bold text-3xl md:text-4xl text-ink tracking-tight">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-4 text-ink-soft max-w-md">
        요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-ink text-white text-sm font-semibold px-6 py-3 min-h-[44px]"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
