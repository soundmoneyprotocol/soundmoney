/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Docs = () => {
  return (
    <>
      <div className="lg:pt-32 pt-2 md:px-12 px-6">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed">
          Documentation
        </h2>
        <p className="text-center md:text-xl text-lg text-gray-600 mt-4 mb-8">
          Everything you need to build, deploy, and monetize with SoundMoney AI
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 pb-8">
          <a
            href="https://app.gitbook.com/o/FoQxWdfubvVyY1hbbZ19/sites/site_BktkY"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Enterprise API Docs
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/protocol/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Protocol v.2.5
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/lite-paper/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Lite Paper
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/tokenomics/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Tokenomics
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/roadmap/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Roadmap
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/overview/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Overview
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://soundmoney.gitbook.io/sound-money-api/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              API Reference
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
        </div>
      </div>

      {/* AI Social Agent Section */}
      <section className="py-20 md:px-12 px-6 bg-gradient-to-r from-orange-50 to-orange-100">
        <h2 className="text-center md:text-6xl text-3xl font-gilroy font-bold text-orange-900 pb-12">
          AI Social Agent Platform
        </h2>
        <p className="md:px-20 px-6 text-xl text-justify font-semibold text-orange-800 mb-8">
          SoundMoney AI is a comprehensive platform that enables creators to deploy automated social agents, manage tokenized campaigns, and monetize engagement across multiple channels. Using Claude, Midjourney, and Perplexity, the platform generates targeted content, optimizes campaigns in real-time, and tracks conversions to maximize ROI.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="border border-orange-200 shadow-lg rounded-md p-8 space-y-4 bg-white hover:shadow-xl transition">
            <div className="bg-orange-500 w-14 rounded-full p-2 shadow-inner border border-orange-500">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-orange-900 text-lg">
                Deploy Social Agents
              </h3>
              <p className="text-sm text-gray-700">
                Automated content generation, audience targeting, and engagement workflows powered by advanced AI models for 24/7 campaign management.
              </p>
            </div>
          </div>
          <div className="border border-orange-200 shadow-lg rounded-md p-8 space-y-4 bg-white hover:shadow-xl transition">
            <div className="bg-orange-500 w-14 rounded-full p-2 shadow-inner border border-orange-500">
              <span className="text-2xl">💰</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-orange-900 text-lg">
                Token-Based Monetization
              </h3>
              <p className="text-sm text-gray-700">
                BEZY Boosts purchasing ($1,000 = 100K tokens) with real-time burn mechanics for transparent AI operations cost tracking.
              </p>
            </div>
          </div>
          <div className="border border-orange-200 shadow-lg rounded-md p-8 space-y-4 bg-white hover:shadow-xl transition">
            <div className="bg-orange-500 w-14 rounded-full p-2 shadow-inner border border-orange-500">
              <span className="text-2xl">📊</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-orange-900 text-lg">
                Advanced Analytics
              </h3>
              <p className="text-sm text-gray-700">
                Real-time CAC, LTV, conversion tracking, and ROI optimization across streaming platforms and engagement channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:px-12 px-6">
        <h2 className="text-center md:text-6xl text-3xl font-gilroy font-bold text-cyanSky pb-12">
          Core Features
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="border-b pb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-3">
              1. Build & Deploy
            </h3>
            <p className="text-justify text-gray-700">
              Monetize Social AI and reward your audience for engagement with automated campaigns and tokenized incentives. Set up AI agents in minutes with pre-configured workflows.
            </p>
          </div>
          <div className="border-b pb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-3">
              2. Events & Ticketing
            </h3>
            <p className="text-justify text-gray-700">
              Get events, tickets, and passes downloaded to smartphone wallets with aftermarket rewards and secondary trading capabilities. Enable fans to own and trade their experiences.
            </p>
          </div>
          <div className="border-b pb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-3">
              3. Launch Social Agent Swarm
            </h3>
            <p className="text-justify text-gray-700">
              Deploy swarms of AI agents on SoundMoney for autonomous content creation and audience engagement across multiple platforms simultaneously with coordinated messaging.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-3">
              4. Earn & Tokenize
            </h3>
            <p className="text-justify text-gray-700">
              Convert engagement into revenue through streaming integrations, token rewards, multi-channel monetization, and fan loyalty programs that compound over time.
            </p>
          </div>
        </div>
      </section>

      {/* MCP Integration */}
      <section className="py-20 md:px-12 px-6 bg-gray-50">
        <h2 className="text-center md:text-6xl text-3xl font-gilroy font-bold text-gray-900 pb-12">
          MCP Server Integration
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
          Connect your MCP server to instantly generate Agent documentation and manage integrations. Configure API endpoints, headers, and authentication in minutes.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why MCP?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Auto-generated API documentation</li>
              <li>✓ Live endpoint testing & debugging</li>
              <li>✓ Real-time schema validation</li>
              <li>✓ Code example generation</li>
              <li>✓ Seamless webhook management</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Getting Started
            </h3>
            <ol className="space-y-3 text-gray-700">
              <li>1. Configure MCP server URL</li>
              <li>2. Add HTTP headers & auth tokens</li>
              <li>3. Connect to SoundMoney</li>
              <li>4. View auto-generated docs</li>
              <li>5. Start building integrations</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:px-12 px-6">
        <h2 className="text-center md:text-6xl text-3xl font-gilroy font-bold text-cyanSky pb-12">
          Pricing & Tiers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="border-2 border-gray-300 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">24-Hour Trial</h3>
            <p className="text-4xl font-bold text-orange-600">$9</p>
            <p className="text-gray-600">Perfect for testing the platform</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Basic AI features</li>
              <li>✓ 1 campaign</li>
              <li>✓ Limited tokens</li>
            </ul>
          </div>
          <div className="border-2 border-orange-500 rounded-xl p-8 space-y-4 bg-orange-50">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full w-fit text-sm font-bold">POPULAR</div>
            <h3 className="text-2xl font-bold text-gray-900">Artist Pro</h3>
            <p className="text-4xl font-bold text-orange-600">$100-1000</p>
            <p className="text-gray-600">For independent creators</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Full AI suite</li>
              <li>✓ 5+ campaigns</li>
              <li>✓ Analytics dashboard</li>
              <li>✓ Social agents</li>
            </ul>
          </div>
          <div className="border-2 border-gray-300 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Team Subscription</h3>
            <p className="text-4xl font-bold text-orange-600">$1000-10K</p>
            <p className="text-gray-600">For agencies & labels</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Everything in Pro</li>
              <li>✓ Unlimited campaigns</li>
              <li>✓ Advanced tokenomics</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-20 bg-gray-50">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed pb-12">
          Learn More
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 my-12 gap-8 md:px-12 px-6">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://benitoderosario.medium.com/litepaper-soundmoney-protocol-e6371d96079a"
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg hover:shadow-xl transition"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SuAhTBxHW3bI8f3zRCJn8A.png"
                alt="LitePaper"
                className="group-hover:scale-105 transition duration-300 w-full h-full object-cover"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="font-bold text-lg leading-tight">
                LitePaper: SoundMoney Protocol
              </h3>
              <p className="text-xs">
                Discover how SoundMoney's AI-powered platform enables creators to build engaged communities and monetize at scale.
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://medium.com/@benitoderosario/introducing-tba-tcrs-80d8a7d6950a"
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg hover:shadow-xl transition"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GVIHE4phr30i_TSM0ol-ug.png"
                alt="TBA TCRs"
                className="group-hover:scale-105 transition duration-300 w-full object-cover object-left h-full"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="font-bold text-lg leading-tight">
                Token-Based Architecture
              </h3>
              <p className="text-xs">
                Learn about BEZY token mechanics, purchasing models, and burn mechanics for transparent cost tracking.
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://benitoderosario.medium.com/tarjeta-cripto-dinero-b833c98af1f9"
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg hover:shadow-xl transition"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hODvezVHuLI6RSveq-MJZQ.png"
                alt="Web3 Impact"
                className="group-hover:scale-105 transition duration-300 w-full object-cover object-left h-full"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="font-bold text-lg leading-tight">
                Web3 & Creator Economy
              </h3>
              <p className="text-xs">
                Explore how blockchain technology enables new revenue streams for creators and sustainable music ecosystems.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bgCta md:px-12 px-6">
        <h2 className="text-white text-6xl font-extrabold font-gilroy">
          Ready to Earn from the Sounds You Love?
        </h2>
        <h4 className="text-4xl mt-12 font-bold md:text-white text-cyan-400">
          Deploy AI agents, monetize engagement, <br />
          and build a loyal fan community <br />
          powered by tokens & transparency.
        </h4>
        <div className="py-8 pb-20">
          <Link
            href={'/account/signup'}
            className=" justify-center py-2.5 items-center w-44 gap-x-4 orangeToPink group flex"
          >
            Get Started{' '}
            <p className="group-hover:translate-x-2 text-lg transition-all duration-300 ease-in-out">
              &rarr;
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Docs;
