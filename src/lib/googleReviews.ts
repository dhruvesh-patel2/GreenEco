export type GoogleReview = {
  author: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  googleMapsUrl: string;
  live: boolean;
};

const fallbackData: GoogleReviewsData = {
  rating: 4.6,
  reviewCount: 107,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=GreenEco%2033%20Rue%20de%20la%20Varenne%2094100%20Saint-Maur-des-Foss%C3%A9s",
  live: false,
  reviews: [
    {
      author: "Client GreenEco",
      rating: 5,
      relativeTime: "Avis Google",
      text: "Une équipe très professionnelle, rapide et accueillante. Le pneu a été changé avec soin et efficacité. Je recommande vivement cet atelier.",
    },
    {
      author: "Jordan Ro",
      rating: 5,
      relativeTime: "Avis Google",
      text: "Changement d'un câble de frein très rapide et à un prix raisonnable. Réparation faite en 20 minutes : rapide et professionnel.",
    },
  ],
};

type GooglePlacesResponse = {
  places?: Array<{
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    reviews?: Array<{
      rating?: number;
      relativePublishTimeDescription?: string;
      text?: { text?: string };
      authorAttribution?: {
        displayName?: string;
        uri?: string;
        photoUri?: string;
      };
    }>;
  }>;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return fallbackData;
  }

  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "places.rating,places.userRatingCount,places.googleMapsUri,places.reviews",
        },
        body: JSON.stringify({
          textQuery:
            "GreenEco 33 Rue de la Varenne 94100 Saint-Maur-des-Fossés",
          languageCode: "fr",
          regionCode: "FR",
        }),
        next: { revalidate: 21600 },
      },
    );

    if (!response.ok) {
      return fallbackData;
    }

    const data = (await response.json()) as GooglePlacesResponse;
    const place = data.places?.[0];

    if (!place?.reviews?.length) {
      return fallbackData;
    }

    return {
      rating: place.rating ?? fallbackData.rating,
      reviewCount: place.userRatingCount ?? fallbackData.reviewCount,
      googleMapsUrl: place.googleMapsUri ?? fallbackData.googleMapsUrl,
      live: true,
      reviews: place.reviews.map((review) => ({
        author: review.authorAttribution?.displayName ?? "Client Google",
        authorUrl: review.authorAttribution?.uri,
        profilePhotoUrl: review.authorAttribution?.photoUri,
        rating: review.rating ?? 5,
        relativeTime:
          review.relativePublishTimeDescription ?? "Avis Google",
        text: review.text?.text ?? "",
      })),
    };
  } catch {
    return fallbackData;
  }
}
