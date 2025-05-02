export default function Paragraph({ children }) {
    return (
      <p className="text-3xl font-sans leading-relaxed text-white-800">
        {children}
      </p>
    );
  }