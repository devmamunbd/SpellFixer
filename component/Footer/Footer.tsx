import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Spell Fixer</h2>
            <p className="mt-2 text-gray-600 text-sm">
              Smart spelling & grammar checker for Bengali and English. Write
              clearly and confidently.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Resources
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <Link href="/docs">Documentation</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Follow Us
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spell Fixer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
