import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${siteConfig.nameEn} 개인정보처리방침`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true }
};

// ⚠️ 본 문서는 문의 폼 운영을 위한 기본 초안이며, 법률 자문을 받은 최종 문서가 아닙니다.
// 실제 게시 전 반드시 법률 전문가의 검토를 받고, siteConfig의 사업자 정보를 실제 값으로 교체하세요.

export default function PrivacyPage() {
  return (
    <div className="pt-[calc(var(--header-h)+56px)] pb-28 md:pb-36">
      <div className="container-yay max-w-3xl">
        <h1 className="font-en font-bold text-3xl md:text-4xl text-ink tracking-tight">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          본 문서는 문의 폼 운영을 위한 기본 초안이며, 법률 자문을 받은 최종 문서가
          아닙니다. 실제 게시 전 법률 전문가의 검토를 받으시기 바랍니다.
        </p>

        <div className="mt-12 space-y-10 text-ink-soft leading-relaxed">
          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">1. 수집하는 개인정보 항목</h2>
            <p>
              {siteConfig.nameKo}({siteConfig.nameEn}, 이하 &lsquo;회사&rsquo;)는 문의 폼을 통해
              아래와 같은 개인정보를 수집합니다.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>필수 항목: 이름, 이메일, 문의 내용</li>
              <li>선택 항목: 회사 또는 기관명, 연락처, 문의 분야, 프로젝트 일정, 예상 예산, 참고자료</li>
            </ul>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">2. 개인정보의 수집 및 이용 목적</h2>
            <p>
              수집한 개인정보는 문의 접수 및 응대, 프로젝트 상담, 서비스 제안을 위한
              목적으로만 이용하며, 목적 외 용도로 사용하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">3. 개인정보의 보유 및 이용 기간</h2>
            <p>
              문의 응대 완료 후 일정 기간 보관하며, 관계 법령에 따라 보존이 필요한
              경우를 제외하고는 지체 없이 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않으며, 이용자의
              사전 동의 없이 목적 범위를 초과하여 이용하거나 제3자에게 제공하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">5. 이용자의 권리</h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를
              요청할 수 있습니다. 관련 문의는 아래 담당자 연락처로 접수해 주세요.
            </p>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">6. 개인정보 보호책임자 및 문의처</h2>
            <ul className="space-y-1">
              <li>담당자: {siteConfig.contact.representative}</li>
              <li>이메일: {siteConfig.contact.email}</li>
              <li>연락처: {siteConfig.contact.phone}</li>
              <li>사업자등록번호: {siteConfig.contact.businessNumber}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-en font-bold text-lg text-ink mb-3">7. 고지의 의무</h2>
            <p>
              본 개인정보처리방침은 관련 법령 및 내부 방침에 따라 변경될 수 있으며,
              변경 시 홈페이지를 통해 공지합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
