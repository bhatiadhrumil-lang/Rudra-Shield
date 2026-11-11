import { useState, type Ref } from "react";

type ImageFrameProps = {
  name: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  imageRef?: Ref<HTMLImageElement>;
};

export function ImageFrame({
  name,
  alt,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  imageRef,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {failed ? (
        <div className="image-fallback" role="img" aria-label={`${alt} (visual placeholder)`}>
          <img src="/brand/logo-emblem.webp" alt="" />
        </div>
      ) : (
        <img
          ref={imageRef}
          src={`/images/${name}-1600.webp`}
          srcSet={`/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`}
          sizes={sizes}
          alt={alt}
          width={1600}
          height={1067}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
