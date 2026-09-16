"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import type { GoogleReviewsData } from "@/lib/googleReviews";
import styles from "./ReviewsCarousel.module.css";

type ReviewsCarouselProps = {
  data: GoogleReviewsData;
};

export default function ReviewsCarousel({ data }: ReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const review = data.reviews[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? data.reviews.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % data.reviews.length);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.summary}>
        <strong>{data.rating.toFixed(1).replace(".", ",")}</strong>
        <span className={styles.summaryStars} aria-label={`${data.rating} sur 5`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={17}
              fill={index < Math.round(data.rating) ? "currentColor" : "none"}
            />
          ))}
        </span>
        <span>{data.reviewCount} avis Google</span>
      </div>

      <div className={styles.carousel}>
        <button type="button" onClick={showPrevious} aria-label="Avis précédent">
          <ChevronLeft size={25} />
        </button>

        <article className={styles.card} aria-live="polite">
          <div className={styles.cardHeader}>
            <div className={styles.avatar} aria-hidden="true">
              {review.profilePhotoUrl ? (
                // Google supplies this image URL dynamically through Places API.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={review.profilePhotoUrl} alt="" />
              ) : (
                review.author.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <strong>{review.author}</strong>
              <span>{review.relativeTime}</span>
            </div>
            <span className={styles.googleMark}>Google</span>
          </div>

          <div className={styles.stars} aria-label={`${review.rating} sur 5`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={20}
                fill={index < review.rating ? "currentColor" : "none"}
              />
            ))}
          </div>

          <p>{review.text}</p>

          <a href={data.googleMapsUrl} target="_blank" rel="noreferrer">
            Voir tous les avis sur Google <ExternalLink size={15} />
          </a>
        </article>

        <button type="button" onClick={showNext} aria-label="Avis suivant">
          <ChevronRight size={25} />
        </button>
      </div>

      <div className={styles.dots} aria-label="Choisir un avis">
        {data.reviews.map((item, index) => (
          <button
            type="button"
            key={`${item.author}-${index}`}
            className={index === activeIndex ? styles.activeDot : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher l'avis ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
