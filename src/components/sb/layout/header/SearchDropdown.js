"use client";
import Link from "next/link";
import Image from "next/image";

export default function SearchDropdown({ results, showResults, onClose }) {
  return (
    <div
      className={`absolute top-full left-0 right-0 z-50 mt-3 transition-all duration-200 ease-out ${
        showResults && results.length > 0
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[400px] max-w-lg">
        <div className="p-2">
          {results.map((product, _) => (
            <Link
              key={product.uuid}
              href={`/products/${product.slug}`}
              onClick={onClose}
            >
              <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-150 group">
                <div className="relative w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                  {product.content.image?.filename && (
                    <Image
                      src={product.content.image.filename}
                      alt={product.content.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-base lowercase text-gray-900 truncate">
                    {product.content.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    ${product.content.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {results.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3">
            <Link href="/products" onClick={onClose}>
              <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors text-center">
                view all results →
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
