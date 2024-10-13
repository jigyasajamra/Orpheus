import React from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";


export default function FAQSection() {
    return (
        <section className="bg-black py-16 text-white">
            <div className="max-w-screen-2xl mx-auto px-8">
                <h2 className="text-center text-4xl font-extrabold mb-12">FAQ</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 ">

                    {/* FAQ 1 */}
                    <CardSpotlight className="h-96 w-96">
                    <div className=" p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 ">
                        <h3 className="text-2xl font-semibold mb-4">Can I try TIDAL for free?</h3>
                        <p className="text-gray-400">
                            If you haven’t tried TIDAL before, you’ll be able to sign up for a 30 day free trial. TIDAL’s free trial gives you complete, ad-free access to TIDAL’s lossless catalog and streaming features at no cost.
                        </p>
                    </div>
                    </CardSpotlight>

                    {/* FAQ 2 */}
                    <CardSpotlight className="h-96 w-96">
                    <div className=" p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 ">
                        <h3 className="text-2xl font-semibold mb-4">Can I bring my playlists on other services to TIDAL?</h3>
                        <p className="text-gray-400">
                            Yes, we want your transition to TIDAL to be as smooth as possible. Start importing your favorite playlists <a href="#" className="text-blue-400 underline">here</a>.
                        </p>
                    </div>
                    </CardSpotlight>

                    {/* FAQ 3 */}
                    <CardSpotlight className="h-96 w-96">
                    <div className=" p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 ">
                        <h3 className="text-2xl font-semibold mb-4">What plan types does TIDAL offer?</h3>
                        <p className="text-gray-400">
                            TIDAL’s most popular plan is the Individual plan. In addition to that, we offer a high-value Family plan (for you plus up to 5 members), and a discounted Student plan.
                        </p>
                    </div>
                    </CardSpotlight>

                </div>
            </div>
        </section>
    );
}
