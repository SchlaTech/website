"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-white py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1b1b1b] transition-colors">
      <p>Insight. Action. Growth. | © SchlaTech</p>
      <p>Follow us: </p>
      <a
        href="https://instagram.com/schlatech"
        className="hover:text-blue-400 transition"
      >
        <img
          src="/images/instagram.png"
          alt="Instagram"
          className="inline-block w-5 h-5 mx-2"
        />
      </a>
    </footer>
  );
}
