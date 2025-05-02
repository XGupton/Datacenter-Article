export default function Image({ src, alt, caption }) {
    return (
      <div className="my-8">
        <img src={src} alt={alt} className="w-full rounded-lg shadow-md" />
        {caption && (
          <p className="mt-2 text-sm text-gray-500 italic text-center">
            {caption}
          </p>
        )}
      </div>
    );
  }