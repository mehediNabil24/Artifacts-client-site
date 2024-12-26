import React from 'react';

const FeaturedArtifacts = () => {
    const featuredArtifacts = [
        {
            id: 1,
            title: "Ancient Vase",
            description: "A beautifully crafted vase from the 16th century.",
            image: "../../assets/base.jpg",
        },
        {
            id: 2,
            title: "Historic Sword",
            description: "A sword used in medieval battles, rich in history.",
            image: "../../assets/sword.jpg",
        },
        {
            id: 3,
            title: "Vintage Clock",
            description: "An exquisite clock from the Victorian era.",
            image: "../../assets/clock-908444_1280.jpg",
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Artifacts</h2>
            <div className="grid md:grid-cols-3 gap-6 container mx-auto">
                {featuredArtifacts.map((artifact) => (
                    <div
                        key={artifact.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={artifact.image}
                            alt={artifact.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{artifact.title}</h3>
                            <p className="text-gray-600 mt-2">{artifact.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedArtifacts;
