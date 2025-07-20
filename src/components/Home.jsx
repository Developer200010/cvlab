import { useEffect, useState } from "react";
import profileImg from "../../public/img.png";
import TypedText from "../components/TypedText";
import { Link } from "react-router-dom";

const Home = () => {
    const [showImage, setShowImage] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 200); // Text shows first

        const imageTimer = setTimeout(() => {
            setShowImage(true);
        }, 600); // Image shows after

        return () => {
            clearTimeout(textTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    return (
        <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                {/* Text Section */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 order-2 sm:order-none">
                    <div
                        className={`transition-all duration-700 ease-out transform ${showText
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <h1 className="text-4xl md:text-3xl font-extrabold">
                            Hi, I'm{" "}
                            <span className="text-amber-400">Chandan Vishwakarma</span>
                        </h1>
                    </div>

                    <div
                        className={`transition-opacity duration-700 delay-300 ${showText ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <TypedText
                            className="text-xl md:text-2xl text-teal-400 min-h-[32px] font-extrabold"
                            strings={[
                                "🚀 Full-Stack Developer by passion.",
                                "⚛️ Crafting UIs with React & Tailwind.",
                                "🛠️ Building scalable APIs with Node & Express.",
                                "🌐 From Pixel to Production — I do it all.",
                                "🧠 Learning. Building. Shipping. Repeating.",
                                "💡 Turning ideas into interactive web apps.",
                            ]}
                        />

                    </div>

                    <div
                        className={`transition-all duration-700 delay-500 transform ${showText
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                            }`}
                    >
                        <Link to="/projects">
                        <button className="px-6 py-3 bg-amber-400 text-gray-900 rounded-xl font-semibold hover:bg-amber-500 transition duration-300 shadow-lg">
                            Explore My Work
                        </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <div
                        className={`overflow-hidden border-4 border-amber-300 rounded-3xl shadow-2xl transition-all duration-700 ease-out transform ${showImage
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-10 scale-75"
                            }`}
                    >
                        <img
                            src={profileImg}
                            alt="Chandan Vishwakarma"
                            className="w-[300px] h-[450px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
