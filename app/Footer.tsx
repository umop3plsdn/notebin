import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-12">
      <div className="container items-center mx-auto grid grid-cols-3 gap-4 py-4">
        <a
          href="https://www.youtube.com/@chrisatmachine"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          YouTube
        </a>
        <a
          href="https://twitter.com/chrisatmachine"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          Twitter
        </a>
        <a
          href="https://getalby.com/chrisatmachine"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          Donate
        </a>
        <a
          href="https://github.com/nodetec/NoteBin"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          GitHub
        </a>
        <a
          href="https://github.com/fiatjaf/nos2x"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          Nostr Extension
        </a>
        <a
          href="https://getalby.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-slate-500 hover:text-gray-600 text-center"
        >
          Lightning Wallet
        </a>
      </div>
    </footer>
  );
}
