import { NextResponse } from "next/server";

export const runtime = "nodejs";

// 현재는 실제 이메일 발송 없이 서버 로그로만 남기는 mock 엔드포인트입니다.
// 실제 운영 전, 아래 TODO 위치에 이메일 발송 서비스(Resend, SendGrid, SMTP 등)를 연결하세요.
// README의 "문의 폼 연결 방법" 섹션을 참고하세요.

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const consent = formData.get("consent")?.toString();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, error: "이메일 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    if (consent !== "true") {
      return NextResponse.json(
        { ok: false, error: "개인정보 수집 및 이용에 동의해 주세요." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company: formData.get("company")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      inquiryType: formData.get("inquiryType")?.toString() ?? "",
      timeline: formData.get("timeline")?.toString() ?? "",
      budget: formData.get("budget")?.toString() ?? "",
      message,
      attachmentName: (formData.get("attachment") as File | null)?.name ?? null,
      submittedAt: new Date().toISOString()
    };

    // TODO: 이메일 발송 서비스 연동 지점.
    // 예) await sendContactEmail(payload);
    console.log("[contact] new inquiry", payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] failed to process submission", error);
    return NextResponse.json(
      { ok: false, error: "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
