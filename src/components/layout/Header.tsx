'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-primary dark:text-blue-400 font-bold text-lg">FCSH</span>
              <span className="hidden md:inline text-gray-600 dark:text-gray-400 text-sm ml-2">
                Faculdade de Ciências Sociais e Humanas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 8).map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md inline-flex items-center"
                >
                  {item.title}
                  {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-blue-400"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
            <Link
              href="/contato"
              className="ml-4 px-4 py-2 bg-secondary text-white font-medium rounded-md hover:bg-secondary/90 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}
