import React from "react";

interface ReviewProps {
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
    }[]
}

export const Reviews: React.FC<ReviewProps> = ({reviews}) => {
    const renderStarts = (rating: number) => {
        const fullStars = Math.floor(rating); // Number of full stars
        const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Check if half-star should be added
        const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

        return (
            <>
                {'⭐'.repeat(fullStars)} 
                {halfStar === 1 && '🌟'}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    return(
        <div>
            {reviews.map((review, index) => (
                <div key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                    <p><strong>{review.reviewerName} </strong>{new Date(review.date).toLocaleDateString()}</p>
                    <p><strong>Rating: </strong> {renderStarts(review.rating)}</p>
                    <p><strong>Comment: </strong>{review.comment}</p>
                </div>
            ))}
        </div>
    )
}