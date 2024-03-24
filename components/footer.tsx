import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <footer className="container p-8 mt-10 xl:px-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-gray-400">
            {" "}
            © {new Date().getFullYear()} blog-site demo all rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
