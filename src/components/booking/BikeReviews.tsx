import { Star } from 'lucide-react';
import { sampleReviews } from '@/data/reviews';
import { motion } from 'framer-motion';

interface BikeReviewsProps {
  bikeId: string;
}

export function BikeReviews({ bikeId }: BikeReviewsProps) {
  const reviews = sampleReviews.filter((r) => r.bikeId === bikeId);

  if (reviews.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="font-display text-3xl mb-6">RIDER REVIEWS</h3>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5"
          >
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.customerName}
                className="w-10 h-10 rounded-full object-cover border border-border"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{review.customerName}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${j < review.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
                {review.image && (
                  <img
                    src={review.image}
                    alt="Review photo"
                    className="rounded-lg mt-2 max-h-40 object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
