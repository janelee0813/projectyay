import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoTile from "@/components/ui/VideoTile";
import { getFeaturedVideo, videos } from "@/data/videos";

export default function FilmContent() {
  const featured = getFeaturedVideo();
  const rest = videos.filter((v) => v.slug !== featured.slug).slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="container-yay">
        <SectionHeading
          eyebrow="Film & Content"
          title="Strategy Meets Production"
          description={
            <>
              영상만 만드는 제작사와는 다릅니다.
              <br className="hidden md:block" />
              브랜드의 목표와 마케팅 전략을 이해하고, 그 전략이 가장 효과적으로
              전달되는 화면을 만듭니다.
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-7">
            <VideoTile video={featured} size="large" />
          </Reveal>
          <div className="lg:col-span-5 grid grid-cols-2 gap-5">
            {rest.map((video, i) => (
              <Reveal key={video.slug} delay={Math.min(0.06 * (i + 1), 0.3)}>
                <VideoTile video={video} size="small" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
