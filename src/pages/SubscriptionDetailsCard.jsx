import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SubscriptionDetailsCard = ({ item }) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [reviewerName, setReviewerName] = useState(""); // New state for reviewer name
    const [reviews, setReviews] = useState(item.reviews || []);
    const {user}=use(AuthContext);
    console.log(user);

    const handleReviewSubmit = () => {
        if (!review || rating === 0 || !reviewerName) {
            alert("Please enter a name, a review, and select a rating.");
            return;
        }

        // Adding the new review to the reviews list
        const newReview = {
            id: reviews.length + 1, 
            name: {reviewerName},
            rating,
            comment: review,
            date: new Date().toISOString().split('T')[0], // Current date
        };

        setReviews([newReview, ...reviews]);

        // Reset fields
        setReview("");
        setRating(0);
        setReviewerName("");  // Reset reviewer name field
    };

    if (!item) {
        return <p className="text-center text-red-500 text-lg">No subscription data found.</p>;
    }

    return (
        <div className="my-10 bg-white shadow-xl rounded-xl overflow-hidden mx-auto">
            {/* Image */}
            <img src={item.banner} alt={item.name} className="w-full lg:h-120 object-cover" />

            {/* Content */}
            <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 text-sm italic">Category: {item.tech_category}</p>
                <p className="text-gray-700">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Features</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {item.features?.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Subscription Benefits</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {item.subscription_benefits?.map((benefit, idx) => (
                                <li key={idx}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                        <p className="font-semibold">
                            Price: <span className="text-primary">${item.price} / {item.frequency}</span>
                        </p>
                        <p className="text-sm text-gray-500">
                            Rating: ⭐ {item.ratings} ({item.number_of_reviews} reviews)
                        </p>
                    </div>
                    <button className="btn btn-primary">Subscribe Now</button>
                </div>

                {/* Review Section */}
                <div className="pt-6 border-t mt-6">
                    <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>

                    {/* Reviewer Name */}
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4"
                        placeholder="Your Name"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                    />

                    <textarea
                        className="textarea textarea-bordered w-full mb-4"
                        placeholder="Write your thoughts..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
                                    onClick={() => setRating(star)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">{rating} Star{rating > 1 ? "s" : ""}</span>
                    </div>
                    <button className="btn btn-secondary" onClick={handleReviewSubmit}>
                        Submit Review
                    </button>
                </div>

                {/* Display Reviews */}
                <div className="pt-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

                    {reviews.length > 0 ? (
                        <div className="space-y-4">
                            {reviews.map((review, idx) => (
                                <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span
                                                    key={star}
                                                    className={`text-xl ${star <= review.rating ? "text-yellow-400" : "text-gray-400"}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">by {review.name}</span>
                                    </div>
                                    <p className="mt-2 text-gray-700">{review.comment}</p>
                                    <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionDetailsCard;
