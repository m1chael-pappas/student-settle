"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-neutral-700" />
        ) : (
          <Menu className="h-6 w-6 text-neutral-700" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg z-50 md:hidden animate-slide-down">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#services"
                  onClick={toggleMenu}
                  className="text-neutral-700 hover:text-primary transition-colors py-2 text-lg"
                >
                  Services
                </a>
                <a
                  href="#how-it-works"
                  onClick={toggleMenu}
                  className="text-neutral-700 hover:text-primary transition-colors py-2 text-lg"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  onClick={toggleMenu}
                  className="text-neutral-700 hover:text-primary transition-colors py-2 text-lg"
                >
                  Pricing
                </a>
                <Link href="/booking" onClick={toggleMenu}>
                  <Button className="w-full mt-4">Book Consultation</Button>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
