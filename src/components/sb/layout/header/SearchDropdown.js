"use client";
import Link from "next/link";
import Image from "next/image";

export default function SearchDropdown({ results, showResults, onClose }) {
  return (
    <div
      className={`absolute top-full left-0 right-0 z-50 mt-2 transition-all duration-200 ease-out ${
        showResults && results.length > 0
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
        {results.map((product) => (
          <Link
            key={product.uuid}
            href={`/products/${product.slug}`}
            onClick={onClose}
          >
            <div className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
              <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                {product.content.image?.filename && (
                  <Image
                    src={product.content.image.filename}
                    alt={product.content.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-sm lowercase text-gray-900">
                  {product.content.name}
                </p>
                <p className="text-sm text-gray-500">
                  ${product.content.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
